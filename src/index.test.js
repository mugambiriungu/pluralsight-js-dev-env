import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import { doesNotReject } from 'assert';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('inedx.html',() => {
  it( 'should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello megas!");
      done();
      window.close();
    });
  })
})
