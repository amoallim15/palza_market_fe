import EN from "./lang"
//
export const mainAppBar = [
  {
    name: EN.about,
    link: "/about"
  },
  {
    name: EN.realstateSearch,
    link: "/search"
  },
  {
    name: EN.realstateSales,
    link: "/sales"
  },
  {
    name: EN.realstateHub,
    link: "/hub"
  },
  {
    name: EN.community,
    link: "/community"
  }
]

export const dashboardSideMenu = [
  {
    name: EN.profile,
    link: "/profile",
    type: "link"
  },
  {
    name: EN.wishlist,
    link: "/wishlist",
    type: "link",
    role: "all"
  },
  {
    name: EN.realstates,
    type: "group",
    children: [
      {
        name: EN.realstates,
        link: "/realstates",
        type: "link"
      },
      {
        name: EN.categories,
        link: "/realstate-categories",
        type: "link"
      },
      {
        name: EN.reviews,
        link: "/reviews",
        type: "link"
      }
    ]
  },
  {
    name: EN.community,
    type: "group",
    children: [
      {
        name: EN.notices,
        link: "/notices",
        type: "link"
      },
      {
        name: EN.categories,
        link: "/notice-categories",
        type: "link"
      },
      {
        name: EN.reports,
        link: "/reports",
        type: "link"
      }
    ]
  },
  {
    name: EN.homePage,
    link: "/home-page",
    type: "link"
  },
  {
    name: EN.users,
    link: "/users",
    type: "link"
  },
  {
    name: EN.smsMessages,
    link: "/sms",
    type: "link"
  },
  {
    name: EN.crontab,
    link: "/crontab",
    type: "link"
  }
]
