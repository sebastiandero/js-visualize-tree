const tree_chart_conf = {
    chart: {
        container: "#tai-map-tree",
        node: {
            collapsable: true
        },
        connectors: {
            type: 'straight'
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

$(function () {
    let tree_chart = new Treant(tree_chart_conf);
});