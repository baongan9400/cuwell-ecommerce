import React, { useEffect } from "react";
import PostList from "../../../components/PostList";
import { searchLoading } from "redux/actions/posts/search.action";

import "./posts.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Posts() {
  const dispatch = useDispatch();
  const { load, data } = useSelector((state) => state.searchPostsReducer);
  const postList = [
    {
      id: 605,
      title:
        "Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa học Online về Tài chính",
      description:
        "Cuốn sách “Tài chính cá nhân dành cho người Việt Nam” và bộ bài giảng trực tuyến tặng kèm, gồm tất cả những nội dung về tài chính cá nhân, như sau:  Kiếm tiền: Khi còn có thể làm việc, chúng ta cần...",
      category: "Sách, VPP & Quà tặng",
      price: 200000,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
      ],
      user_id: 12,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 12,
        name: "Harry Potter",
        email: "user11@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 607,
      title: "Muôn Kiếp Nhân Sinh (Many Lives - Many Times)",
      description:
        " “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn...",
      category: "Sách, VPP & Quà tặng",
      price: 104800,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
      ],
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "Taylor Swift",
        email: "user8@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 608,
      title: "Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2",
      description:
        "“Tôi lúc 6 tuổi: Mẹ ơi, 25 tuổi con sẽ mua cho mẹ một căn nhà lớn và chiếc xe hơi! Tôi lúc 25 tuổi: Mẹ yêu, shipper đến rồi con còn thiếu 20k để nhận hàng.” Đúng là tuổi trẻ chưa trải sự đời, lớn rồi...",
      category: "Sách, VPP & Quà tặng",
      price: 49115,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/ce/e1/0b075dee2ed24db065394a43dbf1df31.jpg",
        "https://salt.tikicdn.com/cache/400x400/ts/review/b4/d1/72/0b66e530e7d503333154864949af2f92.jpg.webp",
        "https://salt.tikicdn.com/ts/review/b8/67/5c/66b44b0d043d1e40ce8b554dde43e8b9.jpg",
      ],
      user_id: 1,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 1,
        name: "Le Anh Huy",
        email: "user0@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_ADMIN"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 609,
      title:
        "Sách 30 Ngày Thay Đổi Bản Thân Full Tập 1 và 2  - Loại Bỏ 30 Thói Quen Xấu Đánh Cắp Thời Gian Của Bạn",
      description:
        "30 NGÀY THAY ĐỔI BẢN THÂN FULL TẬP 1 và 2- DAMON ZAHARIADES  Cuốn sách hữu ích cung cấp phương pháp thực tế và tối ưu để loại bỏ 30 thói quen xấu đánh cắp thời gian của bạn với lộ trình rõ ràng,...",
      category: "Sách, VPP & Quà tặng",
      price: 202200,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
      ],
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "Dang Bao Ngan",
        email: "user8@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 113,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 114,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 115,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
        {
          id: 117,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
        {
          id: 116,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 605,
      title:
        "Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa học Online về Tài chính",
      description:
        "Cuốn sách “Tài chính cá nhân dành cho người Việt Nam” và bộ bài giảng trực tuyến tặng kèm, gồm tất cả những nội dung về tài chính cá nhân, như sau:  Kiếm tiền: Khi còn có thể làm việc, chúng ta cần...",
      category: "Sách, VPP & Quà tặng",
      price: 200000,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
      ],
      user_id: 12,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 12,
        name: "Harry Potter",
        email: "user11@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 607,
      title: "Muôn Kiếp Nhân Sinh (Many Lives - Many Times)",
      description:
        " “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn...",
      category: "Sách, VPP & Quà tặng",
      price: 104800,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
      ],
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "Taylor Swift",
        email: "user8@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 608,
      title: "Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2",
      description:
        "“Tôi lúc 6 tuổi: Mẹ ơi, 25 tuổi con sẽ mua cho mẹ một căn nhà lớn và chiếc xe hơi! Tôi lúc 25 tuổi: Mẹ yêu, shipper đến rồi con còn thiếu 20k để nhận hàng.” Đúng là tuổi trẻ chưa trải sự đời, lớn rồi...",
      category: "Sách, VPP & Quà tặng",
      price: 49115,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/ce/e1/0b075dee2ed24db065394a43dbf1df31.jpg",
        "https://salt.tikicdn.com/cache/400x400/ts/review/b4/d1/72/0b66e530e7d503333154864949af2f92.jpg.webp",
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/ce/e1/0b075dee2ed24db065394a43dbf1df31.jpg",
      ],
      user_id: 1,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 1,
        name: "Le Anh Huy",
        email: "user0@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_ADMIN"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 609,
      title:
        "Sách 30 Ngày Thay Đổi Bản Thân Full Tập 1 và 2  - Loại Bỏ 30 Thói Quen Xấu Đánh Cắp Thời Gian Của Bạn",
      description:
        "30 NGÀY THAY ĐỔI BẢN THÂN FULL TẬP 1 và 2- DAMON ZAHARIADES  Cuốn sách hữu ích cung cấp phương pháp thực tế và tối ưu để loại bỏ 30 thói quen xấu đánh cắp thời gian của bạn với lộ trình rõ ràng,...",
      category: "Sách, VPP & Quà tặng",
      price: 202200,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
      ],
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "Dang Bao Ngan",
        email: "user8@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 113,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 114,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 115,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
        {
          id: 117,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
        {
          id: 116,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 605,
      title:
        "Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa học Online về Tài chính",
      description:
        "Cuốn sách “Tài chính cá nhân dành cho người Việt Nam” và bộ bài giảng trực tuyến tặng kèm, gồm tất cả những nội dung về tài chính cá nhân, như sau:  Kiếm tiền: Khi còn có thể làm việc, chúng ta cần...",
      category: "Sách, VPP & Quà tặng",
      price: 200000,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
      ],
      user_id: 12,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 12,
        name: "Harry Potter",
        email: "user11@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 607,
      title: "Muôn Kiếp Nhân Sinh (Many Lives - Many Times)",
      description:
        " “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn...",
      category: "Sách, VPP & Quà tặng",
      price: 104800,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
      ],
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "Taylor Swift",
        email: "user8@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 608,
      title: "Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2",
      description:
        "“Tôi lúc 6 tuổi: Mẹ ơi, 25 tuổi con sẽ mua cho mẹ một căn nhà lớn và chiếc xe hơi! Tôi lúc 25 tuổi: Mẹ yêu, shipper đến rồi con còn thiếu 20k để nhận hàng.” Đúng là tuổi trẻ chưa trải sự đời, lớn rồi...",
      category: "Sách, VPP & Quà tặng",
      price: 49115,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/ce/e1/0b075dee2ed24db065394a43dbf1df31.jpg",
        "https://salt.tikicdn.com/cache/400x400/ts/review/b4/d1/72/0b66e530e7d503333154864949af2f92.jpg.webp",
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/ce/e1/0b075dee2ed24db065394a43dbf1df31.jpg",
      ],
      user_id: 1,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 1,
        name: "Le Anh Huy",
        email: "user0@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_ADMIN"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 13,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 14,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
      ],
    },
    {
      id: 609,
      title:
        "Sách 30 Ngày Thay Đổi Bản Thân Full Tập 1 và 2  - Loại Bỏ 30 Thói Quen Xấu Đánh Cắp Thời Gian Của Bạn",
      description:
        "30 NGÀY THAY ĐỔI BẢN THÂN FULL TẬP 1 và 2- DAMON ZAHARIADES  Cuốn sách hữu ích cung cấp phương pháp thực tế và tối ưu để loại bỏ 30 thói quen xấu đánh cắp thời gian của bạn với lộ trình rõ ràng,...",
      category: "Sách, VPP & Quà tặng",
      price: 202200,
      size: "small",
      image: [
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
      ],
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "Dang Bao Ngan",
        email: "user8@gmail.com",
        phone: "123456789",
        address: {
          createdAt: "2021-06-28T13:07:55.574+00:00",
          updatedAt: "2021-07-12T09:58:44.192+00:00",
          id: 1,
          commune: "Phường An Khê",
          district: "Quận Thanh Khê",
          city: "Hậu Giang",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      status: false,
      buyer: [
        {
          id: 12,
          name: "user12",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 113,
          name: "user13",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 114,
          name: "user14",
          email: "user11@gmail.com",
          avatar: null,
        },
        {
          id: 115,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
        {
          id: 117,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
        {
          id: 116,
          name: "user15",
          email: "user15@gmail.com",
          avatar: null,
        },
      ],
    },
  ];
  const params = {
    search: "",
    category: "",
    page: 1,
    page_size: 12,
  };
  useEffect(() => {
    dispatch(searchLoading(params));
  }, []);
  return (
    <div className="latest-products">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="section-heading d-flex align-items-center">
              <h2 className="blink_me text-center d-flex align-items-center">
                <div>LATEST ARRIVAL</div>
                <div className="d-none divSpan  d-md-block">
                  It’s old for them but gold for you
                </div>
              </h2>

              <div style={{ marginLeft: "auto", marginBottom: "10px" }}>
                <Link to="/best-price" style={{ width: "100%" }} className="">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <PostList load={load} posts={data.results} />
        </div>
      </div>
    </div>
  );
}
export default Posts;
