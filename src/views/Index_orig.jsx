// /*!

// =========================================================
// * BLK Design System React - v1.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/blk-design-system-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React, {
//   Fragment,
//   useState,
//   componentDidMount,
//   componentWillUnmount
// } from "react";

// // core components
// import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
// import PageHeader from "components/PageHeader/PageHeader.jsx";
// import Footer from "components/Footer/Footer.jsx";
// import axios from "axios";

// // sections for this page/view
// import Basics from "views/IndexSections/Basics.jsx";
// import Navbars from "views/IndexSections/Navbars.jsx";
// import Tabs from "views/IndexSections/Tabs.jsx";
// import Pagination from "views/IndexSections/Pagination.jsx";
// import Notifications from "views/IndexSections/Notifications.jsx";
// import Typography from "views/IndexSections/Typography.jsx";
// import JavaScript from "views/IndexSections/JavaScript.jsx";
// import NucleoIcons from "views/IndexSections/NucleoIcons.jsx";
// import Signup from "views/IndexSections/Signup.jsx";
// import Examples from "views/IndexSections/Examples.jsx";
// import Download from "views/IndexSections/Download.jsx";

// import SearchEvents from "views/custom/SearchEvents";

// // componentDidMount = () => {
// //   document.body.classList.toggle("index-page");
// // };
// // componentWillUnmount = () => {
// //   document.body.classList.toggle("index-page");
// // };

// const Index = () => {
//   const [events, setEvents] = useState([]);
//   const [event, setEvent] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState(null);

//   const [within, setWithin] = useState(null);
//   const [keyword, setKeyword] = useState("");

//   const searchEvents = async (location, within, keyword) => {
//     setLoading(true);
//     // console.log(location, within, keyword);
//     const res = await axios.get(
//       `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${within}mi&token=${
//         process.env.REACT_APP_EVENTBRITE_CLIENT_ID
//       }`
//     );
//     setEvents(res.data);
//     setLoading(false);
//   };

//   return (
//     <>
//       <IndexNavbar />
//       <div className="wrapper">
//         <PageHeader />
//         {/* <SearchEvents /> */}

//         <div className="main">
//           <Basics />
//           <Navbars />
//           {/* <Tabs />
//             <Pagination />
//             <Notifications />
//             <Typography />
//             <JavaScript />
//             <NucleoIcons />
//             <Signup />
//             <Examples />
//             <Download /> */}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Index;
