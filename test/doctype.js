/* jshint mocha: true, maxlen: false */
import posthtml from '../index.js';
import { expect } from 'chai';
import { file } from '../util/test.js';

const doctype = file('templates/doctype.html');
const html = file('templates/html.html');

function test(html, reference, done) {
    posthtml().process(html).then(result => {
        expect(reference).to.eql(result.html);
        done();
    }).catch(error => done(error));
}

describe('Parse Doctype', () => {

    it('doctype eqval', done => {
        test(doctype, doctype, done);
    });

    it('empty doctype', done => {
        test(html, html, done);
    });

});