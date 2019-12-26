import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';

cytoscape.use(coseBilkent);

import './style.css';
// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다
const data = [ // list of graph elements to start with
    { 
        data: { 
            id: 'PJ-mindMap' ,
            url: "https://github.com/nomelancholy/js-project-driven-study-mind-map/projects/1?add_cards_query=is%3Aopen",
            label: "Project Driven Study 기록 web app"
    }
    },
    { 
        data: { 
            id: 'ISSUE-packageJson',
            url: "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            label: "package.json 에러"
     }
    },
    { 
        data: { id: 'PJ-mindMap->ISSUE-packageJson', source: 'ISSUE-packageJson', target: 'PJ-mindMap' }
    },
    { 
        data: { 
            id: 'STUDY-npmInit',
            url: "https://stackoverflow.com/questions/9484829/npm-cant-find-package-json",
            label: "npm 패키지 설치 순서 숙지"
     }
    },
    { 
        data: { id: 'ISSUE-packageJson->STUDY-npmInit', source: 'STUDY-npmInit', target: 'ISSUE-packageJson' }
    },
    { 
        data: { 
            id: 'ISSUE-outsideModule',
            url: "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNT3L0sknJfq3DO75H55Q5VQJODk-Q%3A1577373778729&ei=UtAEXvGVLMLh-AbOm7CYDA&q=Uncaught+SyntaxError%3A+Cannot+use+import+statement+outside+a+modul&oq=Uncaught+SyntaxError%3A+Cannot+use+import+statement+outside+a+modul&gs_l=psy-ab.3..35i39j0l2j0i203l7.513620.513620..514369...0.0..0.167.374.1j2......0....2j1..gws-wiz.gwgT-rwsfWw&ved=0ahUKEwjxhomez9PmAhXCMN4KHc4NDMMQ4dUDCAs&uact=5",
            label: "script module 에러"
     }
    },
    { 
        data: { id: 'PJ-mindmap->ISSUE-outsideModule', source: 'ISSUE-outsideModule', target: 'PJ-mindMap' }
    },
    { 
        data: { 
            id: 'STUDY-scriptModule',
            url: "https://velog.io/@takeknowledge/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%ED%95%99%EC%8A%B5-%EB%82%B4%EC%9A%A9-%EC%9A%94%EC%95%BD-lwk4drjnni",
            label: "js module 학습"
     }
    },
    { 
        data: { id: 'ISSUE-outsideModule->STUDY-scriptModule', source: 'STUDY-scriptModule', target: 'ISSUE-outsideModule' }
    },
    { 
        data: { 
            id: 'STUDY-scriptPosition',
            url: "https://velog.io/@takeknowledge/script-%ED%83%9C%EA%B7%B8%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%9C%84%EC%B9%98%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C%EC%9A%94",
            label: "script 태그 위치 학습"
     }
    },
    { 
        data: { id: 'ISSUE-outsideModule->STUDY-scriptPosition', source: 'STUDY-scriptPosition', target: 'ISSUE-outsideModule' }
    },
    { 
        data: { 
            id: 'ISSUE-localCORS',
            url: "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNSmKE1wN_fBQuRtT5pwz0hZ5JqldQ%3A1577374293889&ei=VdIEXtP7NY-lmAX82Z7oDg&q=Access+to+script+at+%27file%3A%2F%2F%2FC%3A%2Fdev%2Fworkspace%2Fjs-seomal-clone%2Fjs%2Fcyto.js%27+from+origin+%27null%27+has+been+blocked+by+CORS+policy%3A+Cross+origin+requests+are+only+supported+for+protocol+schemes%3A+http%2C+data%2C+chrome%2C+chrome-extension%2C+https.&oq=Access+to+script+at+%27file%3A%2F%2F%2FC%3A%2Fdev%2Fworkspace%2Fjs-seomal-clone%2Fjs%2Fcyto.js%27+from+origin+%27null%27+has+been+blocked+by+CORS+policy%3A+Cross+origin+requests+are+only+supported+for+protocol+schemes%3A+http%2C+data%2C+chrome%2C+chrome-extension%2C+https.&gs_l=psy-ab.3..35i39j0i20i263l2j0i203l7.516217.516217..516645...0.0..0.177.281.0j2......0....2j1..gws-wiz.JE3_EPpI5o4&ved=0ahUKEwiT-tuT0dPmAhWPEqYKHfysB-0Q4dUDCAs&uact=5",
            label: "local 실행시 CORS 에러"
     }
    },
    { 
        data: { id: 'PJ-mindmap->ISSUE-localCORS', source: 'ISSUE-localCORS', target: 'PJ-mindMap' }
    },
    { 
        data: { 
            id: 'STUDY-localCORS',
            url: "https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu",
            label: "CORS & SOP 학습"
     }
    },
    { 
        data: { id: 'ISSUE-localCORS->STUDY-localCORS', source: 'STUDY-localCORS', target: 'ISSUE-localCORS' }
    },
    { 
        data: { 
            id: 'ISSUE-moduleImport',
            url: "https://goenning.net/2017/07/21/how-to-avoid-relative-path-hell-javascript-typescript-projects/",
            label: "module import 경로 에러"
     }
    },
    { 
        data: { id: 'PJ-mindmap->ISSUE-moduleImport', source: 'ISSUE-moduleImport', target: 'PJ-mindMap' }
    },
    { 
        data: { 
            id: 'STUDY-webpackBuild',
            url: "https://github.com/nomelancholy/webpack-build-practice",
            label: "webpack build 실습"
     }
    },
    { 
        data: { id: 'ISSUE-moduleImport->STUDY-webpackBuild', source: 'STUDY-webpackBuild', target: 'ISSUE-moduleImport' }
    },
    { 
        data: { 
            id: 'STUDY-jsBrowser',
            url: "https://github.com/nomelancholy/webpack-build-practice",
            label: "js 엔진과 runtime 학습"
     }
    },
    { 
        data: { id: 'STUDY-webpackBuild->STUDY-jsBrowser', source: 'STUDY-jsBrowser', target: 'STUDY-webpackBuild' }
    }
];
// 아래는 공식 사이트에 올라와 있는 예제 코드입니다
var cy = cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: data,

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(label)'
            }
        },

        {
            selector: 'edge',
            style: {
                'width': 3,
                'curve-style': 'bezier',
                'line-color': '#ccc',
                'source-arrow-color': '#ccc',
                'source-arrow-shape': 'vee'
            }
        }
    ],

    layout: {
        name: 'cose-bilkent',
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true
    }
});