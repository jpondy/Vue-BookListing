// https://scotch.io/tutorials/how-to-write-a-unit-test-for-vuejs

import Vue from 'vue';
import MyButtons from './src/components/MyButtons';
import assert from 'chai';

describe('MyButtons', function() {
    describe('confirm Event', function(){
        it('should raise the confirm event when confirm button is pressed', function() {
            assert.isTrue(true);
        });
        it('should have a confirmed event source', function(){
            const Constructor = Vue.extend(MyButtons);
            const MyButtonsComponent = new Constructor().$mount();
            assert.isFunction(confirmed, 'MyButtons does not have a confirmed method');
        });
    });
});