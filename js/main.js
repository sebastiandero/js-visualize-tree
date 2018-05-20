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

    $('.node .node-title').each(function () {

        if ($(this).text().match(/\|A:CHECK/)) {
            $(this).parent().addClass("node-type-a1")
        } else if ($(this).text().match(/\|A:FOLD/)) {
            $(this).parent().addClass("node-type-a0")
        } else if ($(this).text().match(/\|A:R[0-9]+\|/)) {
            $(this).parent().addClass("node-type-a2")
        }

        if ($(this).text().match(/^ta/)) {
            $(this).parent().addClass("node-type-ta")
        } else if ($(this).text().match(/^ca/)) {
            $(this).parent().addClass("node-type-ca")
        } else if ($(this).text().match(/^a/)) {
            $(this).parent().addClass("node-type-a")
        }
    })
});