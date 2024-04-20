// { "input": "0000000010\n26\n10" }
// { "input": "0001000010\n18\n10" }
// { "input": "0001010010\n30\n10" }
// { "input": "0101000010\n22\n10" }

import { writeFile } from "fs/promises"
import { resolve, dirname } from "path"

const TEST_JSONL = resolve(
  dirname(Bun.main),
  "test.jsonl"
)

await writeFile(TEST_JSONL, "");

for (let i = 0; i < 256; i++) {
  const input = Array(10).fill(0);
  input[Math.floor(Math.random() * input.length)] = 1;

  const example = {
    input: `${input.join('')}\n${i}\n10`
  }

  await writeFile(
    TEST_JSONL,
    JSON.stringify(example) + '\n',
    { flag: 'a' }
  )
}
