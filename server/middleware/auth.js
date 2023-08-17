import jwt from "jsonwebtoken";

// Google auth verification and setting up middle ware
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; //1
    let decodedData;

    if(token && isCustomAuth){
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.id;
    }else{
      decodedData = jwt.verify(token);
      req.userId = decodedData?.sub;
    }
    
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;



// import jwt from "jsonwebtoken";

// // Google auth verification and setting up middle ware
// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const isCustomAuth = token.length < 500; //1
//     let decodedData;
//     decodedData = jwt.decode(token);
//     req.userId = decodedData?.sub;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;
