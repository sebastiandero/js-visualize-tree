const tree_chart_conf = {
    chart: {
        container: "#tai-map-tree",
        node: {
            collapsable: true
        },
        connectors: {
            type: 'curve',
            style: {
                'stroke-width': 3,
                stroke: '#ffffff'
            }
        },
        animation: {
            nodeAnimation: "easeOutCubic",
            nodeSpeed: 300,
            connectorsAnimation: "cubic",
            connectorsSpeed: 300
        }
    },
    nodeStructure: data
}
let tree_chart
$(function () {
    tree_chart = new Treant(tree_chart_conf);

    $('#loading').toggle();

    $('.node').each(function () {
        if ($(this).find('.node-title').text().match(/PNone: None/)) {
            $(this).find('.node-title').text("Root");
        } else if ($(this).find('.node-title').text().match(/: CHECK/)) {
            $(this).addClass("node-type-a1")
        } else if ($(this).find('.node-title').text().match(/: FOLD/)) {
            $(this).addClass("node-type-a0")
        } else if ($(this).find('.node-title').text().match(/: R[0-9]+/)) {
            $(this).addClass("node-type-a2")
        }

        if ($(this).find('.node-node-type').text() === "2") {
            $(this).addClass("node-type-ta")
        } else if ($(this).find('.node-name').text().match(/^ChanceNode/)) {
            $(this).addClass("node-type-ca")
        } else if ($(this).find('.node-name').text().match(/^ActionNode/)) {
            $(this).addClass("node-type-a")
        }
    })
});