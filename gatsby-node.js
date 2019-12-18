const axios = require('axios');
const crypto =require('crypto');
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
});
//console.log(process.env.MYHD_API_URL);

exports.sourceNodes = async ({ boundActionCreators  }) => {
    const { createNode } = boundActionCreators 
    // Create nodes here, generally by downloading data
    // fetch raw data from the randomuser api
    const fetchAllJobs = () => axios.get(process.env.MYHD_API_URL+`/api_jobs`);
    //const fetchAllJobs = () => axios.get(`http://myhd.local/api_jobs`);
    // await for results
    const res = await fetchAllJobs();
    // from a remote API.
    //console.log(res.data)
    //const data = await fetch(REMOTE_API)
    // Process data into nodes.
    //data.forEach(datum => createNode(processDatum(datum)))
    // We're done, return.

    // map into these results and create nodes
  res.data.results.map((job, i) => {
    // Create your node object
    const jobNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Jobs`, // name of the graphQL query --> allJobs {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      jobnumber: job.jobnumber,
      jobtitle: job.jobtitle,
      jobprice: job.jobprice,
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(jobNode))
      .digest(`hex`);
    // add it to jobNode
    jobNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(jobNode);
  });



    return
  }

  exports.onCreateWebpackConfig = ({
    actions,
  }) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
      externals: {
        jquery: 'jQuery', // important: 'Q' capitalized
      }
    })
  }