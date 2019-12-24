import cytoscape from 'cytoscape';
import './style.css';
import './reset.css'
// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다

// 아래는 공식 사이트에 올라와 있는 예제 코드입니다
var cy = cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: [ // list of graph elements to start with
        { // node a
            data: { id: 'a' }
        },
        { // node b
            data: { id: 'b' }
        },
        { // edge ab
            data: { id: 'ab', source: 'a', target: 'b' }
        }
    ],

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(id)'
            }
        },

        {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle'
            }
        }
    ],

    layout: {
        name: 'grid',
        rows: 1
    }

});