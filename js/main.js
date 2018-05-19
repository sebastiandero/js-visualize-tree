let simple_chart_config = {
    chart: {
        container: "#OrganiseChart-simple"
    },

    nodeStructure: {
        text: {name: "Parent node"},
        children: [
            {
                text: {name: "First child"},
                children: [
                    {
                        text: {name: "First child"}
                    },
                    {
                        text: {name: "Second child"}
                    }
                ]
            },
            {
                text: {name: "Second child"}
            }
        ]
    }
}

let tree_chart = new Treant(simple_chart_config);
