# Records every PA line with Microsoft's en-GB Sonia neural voice (edge-tts)
# into public/voice/<key>.mp3 and writes public/voice/index.json.
# key = FNV-1a 32-bit hash of the line (same function as src/audio/voice.js).
import asyncio, json, os, sys
import edge_tts

def key(t):
    h = 0x811c9dc5
    for ch in t:
        h ^= ord(ch); h = (h * 0x01000193) & 0xffffffff
    return format(h, '08x')

# how a line should be spoken when it differs from the subtitle text
def spoken(t):
    return t.replace('61016', 'six one oh one six')

async def one(t, path, sem):
    t = spoken(t)
    async with sem:
        for _ in range(4):
            try:
                await edge_tts.Communicate(t, 'en-GB-SoniaNeural', rate='-6%').save(path); return
            except Exception as e:
                await asyncio.sleep(2)
        print('FAILED', t, file=sys.stderr)

async def main():
    lines = [l.strip() for l in open('tools/voice_lines.txt') if l.strip()]
    os.makedirs('public/voice', exist_ok=True)
    sem = asyncio.Semaphore(6)
    idx = {}
    jobs = []
    for t in lines:
        k = key(t); idx[k] = 1
        p = f'public/voice/{k}.mp3'
        if not os.path.exists(p): jobs.append(one(t, p, sem))
    await asyncio.gather(*jobs)
    idx = {k: 1 for k in idx if os.path.exists(f'public/voice/{k}.mp3')}
    json.dump(sorted(idx), open('public/voice/index.json', 'w'))
    print(len(idx), 'clips')
asyncio.run(main())
