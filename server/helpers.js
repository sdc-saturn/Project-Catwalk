const axios = require('axios');

const config = require('../config.js');

const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const header = {headers: { 'Authorization': `${config.TOKEN}` }};

// Products GET /products Retrieves the list of products
const getProductsList = () => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=1&count=5`,
    // param: page (integer) Selects the page of results to return. Default 1.
    // param: count (integer) Specifies how many results per page to return. Default 5
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Products GET /products/:product_id Returns all product level information for a specified product id
const getProductById = (id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}?product_id=${id}`,
    // param: product_id (integer) Required ID of the Product requested
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Products GET /products/:product_id/styles Returns all styles available for the given product
const getStylesById = (id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles?product_id=${id}`,
    // param: product_id (integer) Required ID of the Product requested
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Products GET /products/:product_id/related Returns the id's of products related to the product specified
const getRelatedProducts = (id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related?product_id=${id}`,
    // param: product_id (integer) Required ID of the Product requested
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Reviews GET /reviewdata/:id Retrieves the review metadata for a product
const getReviewData = (id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${id}`,
    // param: product_id (integer) Required ID of the product
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Reviews GET /reviews/:id/:totalReviews Retrieves the review metadata
const getAllReviews = (id, sort, totalReviews) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${id}&sort=${sort}&count=${totalReviews}`,
    // param: product_id (integer) Required ID of the product
    // param: page (integer) Selects the page of results to return. Default 1.
    // param: count (integer) Specifies how many results per page to return. Default 5
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Reviews PUT /reviews/:id/helpful Updates the review helpfulness
const voteHelpful = (id) => {
  const options = {
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`, {}, options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Reviews PUT /reviews/:id/report Reports the review for internal action
const reportReview = (id) => {
  const options = {
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/report`, {}, options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Questions&Answers

const getQuestions = (id, cb) => {
  axios.get(`${host}/qa/questions/?product_id=${id}`, header)
    .then((response) => cb(null, response.data))
    .catch((err) => cb(err, null))
}
const getAnswers = (id, cb) => {
  axios.get(`${host}/qa/questions/${id}/answers`, header)
    .then((response) => cb(null, response.data))
    .catch((err) => cb(err, null))
}
const addQuestion = (id, data, cb) => {
  axios.post(`${host}/qa/questions?product_id=${id}`, data, header)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null))
}
const addAnswer = (id, data, cb) => {
  axios.post(`${host}/qa/questions/${id}/answers`, data, header)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null))
}
const markQuestionHelpful = (id, req, cb) => {
  axios.put(`${host}/qa/questions/${id}/helpful`, req, header)
  .then((response) => cb(null, response))
  .catch((err) => cb(err, null))
}
const markAnswerHelpful = (id, req, cb) => {
  axios.put(`${host}/qa/answers/${id}/helpful`, req, header)
  .then((response) => cb(null, response))
  .catch((err) => cb(err, null))
}
const reportQuestion = (id, req, cb) => {
  axios.put(`${host}/qa/questions/${id}/report`, req, header)
  .then((response) => cb(null, response))
  .catch((err) => cb(err, null))
}

const reportAnswer = (id, req, cb) => {
  axios.put(`${host}/qa/answers/${id}/report`, req, header)
  .then((response) => cb(null, response))
  .catch((err) => cb(err, null))
}

const answer = {"answer_id": "114277"};

reportAnswer(114277, answer, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
});

// Cart GET /cart Retrieves list of products added to the cart by a user
// let getCartContents = (id) => {
//   let options = {
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart`,
//     // param: sku_id (integer) ID for the product being added to the cart
//     headers: {
//       Authorization: `${config.TOKEN}`
//     }
//   }
//   return (
//     axios(options)
//       .then((data) => {
//         return (data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   )
// }

// Cart POST /cart Adds a product to the cart
// let postCartContents = (id) => {
//   let options = {
//     method: 'post',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart`,
//     headers: {
//       Authorization: `${config.TOKEN}`
//     }
//   }
//
// }

// Interactions

module.exports = {
  getQuestions,
  getAnswers,
  addQuestion,
  addAnswer,
  markQuestionHelpful,
  markAnswerHelpful,
  reportQuestion,
  reportAnswer,
  // Products[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
  getProductsList,
  getProductById,
  getStylesById,
  getRelatedProducts,
  // Reviews[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md]
  getReviewData,
  getAllReviews,
  voteHelpful,
  reportReview
  // Questions&Answers[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/qa.md]

  // Cart[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/cart.md]
  // getCartContents,
  // postCartContents,
  // Interations[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/interactions.md]
}


/* gLearn notes */
/*
//[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
//Atelier API can currently be found at https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
//In an HTTP GET request, parameters are sent as a query string: http://example.com/page?parameter=value&also=another
//In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body.
*/
