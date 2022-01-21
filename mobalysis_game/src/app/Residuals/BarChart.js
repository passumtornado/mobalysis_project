import React from 'react'

const BarChart = ({data}) => {
    const drawChart = () =>{
  
    
//   const margin = {
//     top:60,
//     bottom:60,
//     left:80,
//     right:40
// };

//   const el = new Element('div');
//   const svg = d3.select(el)
//        .append('svg')
//        .attr('id','chart')
//        .attr('width',width)
//        .attr('height',height)

//   const chart = svg.append('g')
//       .classed('display',true)
//       .attr('transform',`translate(${margin.left},${margin.top})`);

//   const chartWidth = width - margin.left - margin.right;
//   const chartHeight = height - margin.top - margin.bottom;
   
// const plot = (chart,chartWidth,chartHeight)=>{
//   const xScale = d3.scaleBand()
//        .domain(data.map(d=>d.year))
//        .range([0,width])
//   const yScale = d3.scaleLinear()
//       .domain(data.map(d=>d.efficiency))
//       .range([height,0])
//   const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

//   chart.selectAll(".bar")
//        .data(data)
//        .enter()
//        .append('rect')
//        .classed('bar',true)
//        .attr('x',d=>xScale(d.year))
//        .attr('y',d=>yScale(d.efficiency))
//        .attr('height',d=>xScale.bandwidth())
//        .style('fill',(d,i)=>colorScale(i))

// }
    
//   return el.toReact();
}

    // const margin = {
    //     top:60,
    //     bottom:60,
    //     left:80,
    //     right:40
    // };
    // const chart = svg.append('g')
    //      .classed('display',true)
    //      .attr('transform',`translate(${margin.left},${margin.top})`)

    // const chartWidth = width - margin.left - margin.right;
    // const chartheight = height - margin.top - margin.bottom
    return (
        <div>
         
        </div>
    )
}

export default BarChart
