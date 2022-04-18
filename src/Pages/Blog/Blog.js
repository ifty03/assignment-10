import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-center my-8">
        <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://p0.pikrepo.com/preview/907/562/question-mark-illustration.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-semibold text-xl border-b border-b-slate-500 mb-2">
              Q1. Difference between authorization and authentication ?
            </h5>
            <p className="text-gray-700 text-base mb-4 text-left">
              Authentication verifies who the user is ? On the other hand
              Authorization determines what resources a user can
              access.Authentication works through passwords, one-time pins,
              biometric information, and other information provided or entered
              by the user. and Authorization works through settings that are
              implemented and maintained by the organization.Authentication is
              visible to and partially changeable by the user on the other hand
              Authorization isn’t visible to or changeable by the user. this is
              the major difference between authentication and authorization.
            </p>
            <p className="text-gray-600 text-xs">Last updated 1 hour ago</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://p0.pikrepo.com/preview/907/562/question-mark-illustration.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 font-semibold text-xl border-b border-b-slate-500 mb-2">
              Q1. Difference between authorization and authentication ?
            </h5>
            <p className="text-gray-700 text-base mb-4 text-left">
              That's why I use Firebase, Firebase Authentication provides
              backend services, easy-to-use SDKs, and ready-made UI libraries to
              authenticate users to my app. It supports authentication using
              passwords, phone numbers, popular federated identity providers
              like Google, Facebook and Twitter, and more. <br />
              Yes, i have many other options do you have to implement
              authentication. <strong>Some of them are mentioned</strong>
              <br />
              Parse,Back4app,Kinvey,Backendless,Kuzzle,Pubnub,Kumulos,Game
              Sparks,Hoodie,Appwrite,Deployd,NHost etc. But firebase is easy to
              use and safe thats why i use firebase.
            </p>
            <p className="text-gray-600 text-xs">Last updated 2 days ago</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://p0.pikrepo.com/preview/907/562/question-mark-illustration.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 font-semibold text-xl border-b border-b-slate-500 mb-2">
              Q1. Difference between authorization and authentication ?
            </h5>
            <p className="text-gray-700 text-base mb-4 text-left">
              Firebase is a full package that can help in developing your mobile
              or web applications faster with fewer resources and more
              efficiency. without authentication firebase provide many services
              There are many services which Firebase provides, Most useful of
              them are:1. Cloud Firestore 2.Cloud Functions 3. Hosting 4. Cloud
              Storage 5. Google Analytics 6. Predictions 7. Cloud Messaging 8.
              Dynamic Links 9. Remote Config etc.
            </p>
            <p className="text-gray-600 text-xs">Last updated 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
