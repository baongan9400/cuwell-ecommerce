import React from "react";
import PostList from "../../../components/PostList";

import "./posts.scss";
import { Link } from "react-router-dom";

function Posts(props) {
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
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg",
      user_id: 12,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 12,
        name: "user11",
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
      buyer: null,
    },
    {
      id: 607,
      title: "Muôn Kiếp Nhân Sinh (Many Lives - Many Times)",
      description:
        " “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn...",
      category: "Sách, VPP & Quà tặng",
      price: 104800,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "user8",
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
      buyer: null,
    },
    {
      id: 608,
      title: "Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2",
      description:
        "“Tôi lúc 6 tuổi: Mẹ ơi, 25 tuổi con sẽ mua cho mẹ một căn nhà lớn và chiếc xe hơi! Tôi lúc 25 tuổi: Mẹ yêu, shipper đến rồi con còn thiếu 20k để nhận hàng.” Đúng là tuổi trẻ chưa trải sự đời, lớn rồi...",
      category: "Sách, VPP & Quà tặng",
      price: 49115,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/ce/e1/0b075dee2ed24db065394a43dbf1df31.jpg",
      user_id: 1,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 1,
        name: "user0",
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
      buyer: null,
    },
    {
      id: 609,
      title:
        "Sách 30 Ngày Thay Đổi Bản Thân Full Tập 1 và 2  - Loại Bỏ 30 Thói Quen Xấu Đánh Cắp Thời Gian Của Bạn",
      description:
        "30 NGÀY THAY ĐỔI BẢN THÂN FULL TẬP 1 và 2- DAMON ZAHARIADES  Cuốn sách hữu ích cung cấp phương pháp thực tế và tối ưu để loại bỏ 30 thói quen xấu đánh cắp thời gian của bạn với lộ trình rõ ràng,...",
      category: "Sách, VPP & Quà tặng",
      price: 202200,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a9/9c/db/a8e1ae84be26651ff9712d117b8085af.jpg",
      user_id: 9,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 9,
        name: "user8",
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
      buyer: null,
    },
    {
      id: 611,
      title: "Combo Bộ 10 Cuốn - Nhật Ký Trưởng Thành Của Đứa Trẻ Ngoan (Hộp)",
      description:
        "Bộ sách 10 cuốn gồm những câu chuyện thú vị, sinh động, dễ đọc dễ hiểu trong đời sống, mang đến cho trẻ cách nhìn và tư duy đa diện về: học tập, sự tự tin, lòng trung thực, lòng biết ơn, từ đó bồi...",
      category: "Sách, VPP & Quà tặng",
      price: 285900,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/5b/20/cc/63fe40ad1e666f18aab1cd432e8269c6.jpg",
      user_id: 1,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 1,
        name: "user0",
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
      buyer: null,
    },
    {
      id: 620,
      title: "Mình Chỉ Là Người Bình Thường (Sách Tô Màu)",
      description:
        "Sau thành công của cuốn sách tô màu “Tô bình yên, vẽ hạnh phúc” – cuốn sách tạo nên cơn sốt trên các bảng xếp hạng sách bán chạy, tái bản từ khi chưa phát hành, tháng 4 này, “nam thần vạn người mê”,...",
      category: "Sách, VPP & Quà tặng",
      price: 85700,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2d/28/06/604b1691c5c135a711e6ed01f3e5a290.jpg",
      user_id: 7,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 7,
        name: "user6",
        email: "user6@gmail.com",
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
      buyer: null,
    },
    {
      id: 612,
      title: "Tô Bình Yên Vẽ Hạnh Phúc",
      description:
        'TÔ BÌNH YÊN VẼ HẠNH PHÚC – KULZSCSau thành công của cuốn sách đầu tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên:"Tô bình...',
      category: "Sách, VPP & Quà tặng",
      price: 74100,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/97/bc/ae/7fe8a253cce6da248aebe6679bb9c88f.jpg",
      user_id: 15,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 15,
        name: "user14",
        email: "user14@gmail.com",
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
      buyer: null,
    },
    {
      id: 613,
      title:
        "Giải đáp một số vấn đề về nghiệp vụ Năm 2018- 2019 – của Hội Đồng Thẩm phán Tòa án nhân dân tối cao về hình sự - tố tụng hình sự - dân sự - tố tụng dân sự - tố tụng hành chính - đất đai và các quy định của pháp luật có liên quan đến tòa án",
      description:
        "Giải đáp một số vấn đề về nghiệp vụ Năm 2018- 2019 – của Hội Đồng Thẩm phán Tòa án nhân dân tối cao về hình sự - tố tụng hình sự - dân sự - tố tụng dân sự - tố tụng hành chính - đất đai và các quy...",
      category: "Sách, VPP & Quà tặng",
      price: 260000,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/79/d4/0f/c34781c892d4558be07aa21a5ce7be36.jpg",
      user_id: 11,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 11,
        name: "user10",
        email: "user10@gmail.com",
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
      buyer: null,
    },
    {
      id: 614,
      title: "Rèn Luyện Tư Duy Phản Biện",
      description:
        "Như bạn có thể thấy, chìa khóa để trở thành một người có tư duy phản biện tốt chính là sự tự nhận thức. Bạn cần phải đánh giá trung thực những điều trước đây bạn nghĩ là đúng, cũng như quá trình suy...",
      category: "Sách, VPP & Quà tặng",
      price: 61200,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/22/cb/a9/524a27dcd45e8a13ae6eecb3dfacba7c.jpg",
      user_id: 17,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 17,
        name: "user16",
        email: "user16@gmail.com",
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
      buyer: null,
    },
    {
      id: 615,
      title: "Tâm An Ắt Bình An ",
      description:
        "Cuộc đời không phải lúc nào cũng là câu chuyện cười, nên muốn sống vui, mỗi người cần có riêng mình một bí kíp.Trời mưa, coi đó là chuyện hay cho cỏ cây hoa lá. Mưa đủ, hoa bung nở, ru êm những bực...",
      category: "Sách, VPP & Quà tặng",
      price: 67600,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/f4/78/4c/35686a0afa1bdfbc1abdc81b12488de7.jpg",
      user_id: 3,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 3,
        name: "user2",
        email: "user2@gmail.com",
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
      buyer: null,
    },
    {
      id: 617,
      title:
        "Giải đáp vướng mắc trong xét xử về Dân sự, Hình sự, Tố tụng dân sự Hành chính, Kinh doanh thương mại của Tòa án nhân dân tối cao từ năm 2016 - 2021 và các Án lệ được công bố năm 2020 - 2021",
      description:
        " Giải đáp vướng mắc trong xét xử về Dân sự, Hình sự, Tố tụng dân sự Hành chính, Kinh doanh thương mại của Tòa án nhân dân tối cao từ năm 2016 - 2021 và các Án lệ được công bố năm 2020 - 2021      Nhà...",
      category: "Sách, VPP & Quà tặng",
      price: 280000,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/92/f3/26/939c3bd0594010789d667c5595163242.jpg",
      user_id: 15,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 15,
        name: "user14",
        email: "user14@gmail.com",
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
      buyer: null,
    },
    {
      id: 618,
      title: "Đắc Nhân Tâm (Khổ Lớn)",
      description:
        " Đắc nhân tâm của Dale Carnegie là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền....",
      category: "Sách, VPP & Quà tặng",
      price: 64600,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
      user_id: 16,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 16,
        name: "user15",
        email: "user15@gmail.com",
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
      buyer: null,
    },
    {
      id: 619,
      title: "How Psychology Works - Hiểu Hết Về Tâm Lý Học",
      description:
        "MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM XÚC CỦA CON NGƯỜI! Ám sợ là gì, ám sợ có thực sự đáng sợ không? Rối loạn tâm lý là gì, làm thế nào để thoát khỏi tình trạng suy...",
      category: "Sách, VPP & Quà tặng",
      price: 270000,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2b/84/ff/cb34637573525a998596b58d6939411e.jpg",
      user_id: 4,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 4,
        name: "user3",
        email: "user3@gmail.com",
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
      buyer: null,
    },
    {
      id: 610,
      title: "Nóng Giận Là Bản Năng , Tĩnh Lặng Là Bản Lĩnh",
      description:
        "Sai lầm lớn nhất của chúng ta là đem những tật xấu, những cảm xúc tiêu cực trút bỏ lên những người xung quanh, càng là người thân càng dễ gây thương tổn. Cái gì cũng nói toạc ra, cái gì cũng bộc lộ...",
      category: "Sách, VPP & Quà tặng",
      price: 60000,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/70/9a/98/e6d54019a2079b9565114bce93b245b7.jpg",
      user_id: 14,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 14,
        name: "user13",
        email: "user13@gmail.com",
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
      buyer: null,
    },
    {
      id: 621,
      title:
        "Hỏi – đáp Luật Hòa giải, đối thoại tại Tòa án và các văn bản liên quan đến hòa giải, đối thoại",
      description:
        " Tại kỳ họp thứ 9, Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XIV đã thông qua Luật Hòa giải, đối thoại tại Tòa án, gồm 04 chương, 42 điều, có hiệu lực thi hành kể từ ngày 01/01/2021. Luật...",
      category: "Sách, VPP & Quà tặng",
      price: 170000,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/6a/52/0f/610273c9c4b3a754ac22c60e6fec9754.jpg",
      user_id: 4,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 4,
        name: "user3",
        email: "user3@gmail.com",
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
      buyer: null,
    },
    {
      id: 606,
      title: "Cây Cam Ngọt Của Tôi",
      description:
        "“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng số một tác phẩm kinh điển của Brazil.” - Booklist “Một cách nhìn cuộc sống gần như hoàn chỉnh...",
      category: "Sách, VPP & Quà tặng",
      price: 70200,
      size: "small",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
      user_id: 11,
      createdAt: "2021-06-13T00:00:00.000+00:00",
      updatedAt: "2021-06-13T00:00:00.000+00:00",
      user: {
        id: 11,
        name: "user10",
        email: "user10@gmail.com",
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
      buyer: null,
    },
  ];
  return (
    <div>
      <div className="latest-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="section-heading">
                <h2 className="blink_me text-center col-md-11">
                  LATEST ARRIVAL <span>It’s old for them but gold for you</span>
                </h2>
                <Link to="/best-price">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <PostList load={props.load} posts={postList} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Posts;
