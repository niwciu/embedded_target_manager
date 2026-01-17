import * as assert from 'assert';

import { commandExists, runCommand } from '../utils/exec';

describe('exec utilities', () => {
  it('runs a command and captures stdout', async () => {
    const result = await runCommand(process.execPath, ['-e', 'console.log("ok")'], process.cwd());

    assert.strictEqual(result.stdout.trim(), 'ok');
    assert.strictEqual(result.stderr.trim(), '');
  });

  it('detects that the node executable exists', async () => {
    const exists = await commandExists(process.execPath);

    assert.strictEqual(exists, true);
  });
});
