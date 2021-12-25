import React, { useEffect, useState } from "react";

import paymentApi from "api/user/paymentApi";
import ItemSold from "./ItemSold";
function UserSaleHistory(props) {
  const [userPosts, setUserPosts] = useState();

  useEffect(() => {
    fetchUserPost();
  }, []);

  const fetchUserPost = async () => {
    try {
      const res = await paymentApi.loadSoldOrder();
      if (res) {
        setUserPosts(res);
        console.log("user", userPosts);
      }
    } catch (error) {
      console.log("failed to fetch user sale with error: ", error);
    }
  };

  return (
    <div className="userManagePost container-fluid ">
      <div className="row justify-content-center">
        {userPosts?.length > 0 ? (
          userPosts?.map((item) => <ItemSold key={item.id} history={item} />)
        ) : (
          <p className="text-center my-3">
            <img
              className="img-responsive"
              style={{ width: "60%", height: "80%" }}
              src="http://mekhitarianlb.com/wp-content/uploads/2021/07/ae8ac2fa217d23aadcc913989fcc34a2.png"
              alt=""
            />
          </p>
        )}
      </div>
    </div>
  );
}

export default UserSaleHistory;
