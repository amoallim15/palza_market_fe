import EN from "./lang"
//
export const mainAppBarMenu = [
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

export const anonySecondaryAppBarMenu = [
  { name: EN.signIn, type: "link", link: "/sign-in" },
  { name: EN.signUp, type: "link", link: "/sign-up" }
]

export const authSecondaryAppBarMenu = [
  {
    id: "profile",
    name: EN.profile,
    type: "group",
    children: [
      { name: EN.settings, type: "link", link: "/dashboard/profile" },
      { name: EN.wishlist, type: "link", link: "/dashboard/wishlist" },
      { type: "divider" },
      { name: EN.signOut, type: "link", link: "/sign-out" }
    ]
  }
]

export const dashboardSideMenu = [
  {
    name: EN.profile,
    link: "/dashboard/profile",
    type: "link"
  },
  {
    name: EN.wishlist,
    link: "/dashboard/wishlist",
    type: "link"
  },
  {
    name: EN.reviews,
    link: "/dashboard/reviews",
    type: "link"
  },
  {
    name: EN.realstates,
    link: "/dashboard/realstates",
    type: "link",
    divider: true,
    tabs: [
      {
        name: EN.realstates,
        link: "/dashboard/realstates"
      },
      {
        name: EN.categories,
        link: "/dashboard/realstate-categories"
      },
      {
        name: EN.reviews,
        link: "/dashboard/reviews"
      }
    ]
  },
  {
    name: EN.community,
    link: "/dashboard/community",
    type: "link",
    divider: true,
    tabs: [
      {
        name: EN.notices,
        link: "/dashboard/notices"
      },
      {
        name: EN.categories,
        link: "/dashboard/notice-categories"
      },
      {
        name: EN.reports,
        link: "/reports"
      }
    ]
  },
  {
    name: EN.config,
    link: "/dashboard/config",
    type: "link"
  },
  {
    name: EN.homePage,
    link: "/dashboard/home-page",
    type: "link"
  },
  {
    name: EN.banners,
    link: "/dashboard/banners",
    type: "link"
  },
  {
    name: EN.magazine,
    link: "/dashboard/magazine",
    type: "link"
  },
  {
    name: EN.franchise,
    link: "/dashboard/franchise",
    type: "link"
  },
  {
    name: EN.users,
    link: "/dashboard/users",
    type: "link"
  },
  {
    name: EN.smsMessages,
    link: "/dashboard/sms",
    type: "link"
  },
  {
    name: EN.crontab,
    link: "/dashboard/crontab",
    type: "link"
  },
  {
    name: EN.signOut,
    link: "/sign-out",
    type: "link",
    divider: true
  }
]
