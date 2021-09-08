/**
 * this is the custom plugin
 */
import { changeZoomLevel } from '@mapstore/actions/map';
import sample from '@js/reducers/sample';
import {increment} from '@js/actions/sample';
import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

const sampleSelector = createSelector(
    state => state && state.sample && state.sample.counter,
    (counter) => ({
        counter
    })
);


const SamplePlugin = ({
    onChangeZoom,
    onIncrement,
    counter
}) => {
    return (<div id="sample-plugin">
        This is my sample plugin <br/>
        <button onClick={() => {
            onChangeZoom(3);
        }} >zoom to level 3</button>
        <button onClick={() => {
            onIncrement();
        }} >increment</button>
        <p>this is the value of counter: {counter}</p>
    </div>);
};


export default {
    SamplePlugin: connect(sampleSelector, {
        onChangeZoom: changeZoomLevel,
        onIncrement: increment
    })(SamplePlugin),
    reducers: {sample}/* ,
    epics: sampleEpics*/
};
