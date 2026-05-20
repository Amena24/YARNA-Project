const products = [
  {
    id: 1,
    name: "Artisan Bloom Cotton",
    category: "Crochet Threads",
    price: 18.00,
    badge: { text: "New Arrival", position: "left", color: "primary" },
    description: "Ultra-soft GOTS certified organic cotton thread with a natural satin sheen.",
    images: {
      "#8a4b2a": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#7d525f": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY",
      "#54603f": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs",
      "#becca3": "https://lh3.googleusercontent.com/aida-public/AB6AXuA-T7t8i1OThvPfKKamwYylNXZX6s80A6IJkwp0UfR2mZTeMy-KgQE2YDfpnoF6NmV_kSzo1RJ1cIL36Z0eZOh5ek6w66Kax-eARBowqk7c6Gr5OjHTwDLqtRtMVn_Et23xr4sVP8OE2r1suhvBrNFI8JrWiVAy4yrtPPASHTtjvv5rnwBOnBNO9RbhJsN6XtITT-V5E9YvlIaChdkMWcO79YUv5dZ9Vfp5TKxk0aZp9424LZlERpDSxkPu1mF9Dr0PejFHHRTWvZY"
    },
    imageAlt: "Terracotta-colored crochet thread spool with organic cotton fibers",
    colors: ["#8a4b2a", "#7d525f", "#54603f", "#becca3"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Cotton", "Organic"]
  },
  {
    id: 2,
    name: "Ergo-Grip Aluminum",
    category: "Crochet Needles",
    price: 12.50,
    badge: null,
    description: "Designed for comfort during long crochet sessions. Smooth gliding action on all yarn types.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7RbsEMwOCQdsx4P-Argx1RWplxi0zemwaGzcRQlgyaacEoKQtbZDi44re5t0Lv9I7HYKHD2YiuZ-28ZOguPojQmTesYqBblOo_TkbN0H44pdyYOC1o7R7tVfxf4xtgr7JmaZKtLJEC3tfJiZ8Sr146y45BkvqUwxCs10WAGT1gP2YpgUkRO_kRBwOvZNm0Eho8Us49T-a3B-ZSbsprZf5t5Rmjnczxilk9ASYcbmSkRBK5rThqlXlk3MkjrcCLNV5Kjz_YXJRrfs",
    imageAlt: "Ergonomic crochet needle with sage green handle on linen fabric",
    colors: null,
    size: "4.0mm",
    type: "needle",
    filters: []
  },
  {
    id: 3,
    name: "Silk Whisper Blend",
    category: "Crochet Threads",
    price: 24.00,
    badge: null,
    description: "Luxe 20% silk, 80% bamboo blend. Perfect for delicate shawls and accessories.",
    images: {
      "#eeb8c7": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY",
      "#fbf9f4": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#7d525f": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs"
    },
    imageAlt: "Dusty rose and mauve silk blend crochet threads on wooden table",
    colors: ["#eeb8c7", "#fbf9f4", "#7d525f"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Silk Blend"]
  },
  {
    id: 4,
    name: "Hand-Carved Bamboo",
    category: "Crochet Needles",
    price: 15.00,
    badge: null,
    description: "Sustainable bamboo needles with a warm touch. The favorite of traditional crafters.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-T7t8i1OThvPfKKamwYylNXZX6s80A6IJkwp0UfR2mZTeMy-KgQE2YDfpnoF6NmV_kSzo1RJ1cIL36Z0eZOh5ek6w66Kax-eARBowqk7c6Gr5OjHTwDLqtRtMVn_Et23xr4sVP8OE2r1suhvBrNFI8JrWiVAy4yrtPPASHTtjvv5rnwBOnBNO9RbhJsN6XtITT-V5E9YvlIaChdkMWcO79YUv5dZ9Vfp5TKxk0aZp9424LZlERpDSxkPu1mF9Dr0PejFHHRTWvZY",
    imageAlt: "Handcrafted bamboo crochet needles on warm-toned textile",
    colors: null,
    size: "5.5mm",
    type: "needle",
    filters: []
  },
  {
    id: 5,
    name: "Sage Meadow Linen",
    category: "Crochet Threads",
    price: 16.50,
    badge: null,
    description: "Crisp, cool linen and cotton mix. Excellent stitch definition for summer patterns.",
    images: {
      "#dae8be": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs",
      "#becca3": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw"
    },
    imageAlt: "Skeins of natural undyed wool yarn in woven basket in sunny studio",
    colors: ["#dae8be", "#becca3"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Cotton", "Organic"]
  },
  {
    id: 6,
    name: "Precision Steel Hook",
    category: "Crochet Needles",
    price: 19.00,
    badge: { text: "Pro Series", position: "right", color: "tertiary" },
    description: "Masterfully engineered for intricate lace work. Perfectly tapered for high accuracy.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxrixXPVuxeU5wptIMRCtHje0zfg6WsW84hF33mgOm8CTUmqAO0Xbb4ijkzDqvUrt84KiU0AJ3XD96PZExkOr5D09oL69FKfmhC3XDs6re5W-5j4i4em802Lz8015Z6b5fMrpu6IW_SPJyHmckI4VX4Hxs-m7q5U70lkmeAkhXjD_2rXwu_RnclK6yKn-XynrHHv75oQcRwsHP47s7CxMEFtf5jJhDP3nzo1Sn9dkG9sKc5SKGfX3r2ygDWKC-ovhnaFJtpT9Z49M",
    imageAlt: "Professional stainless steel crochet needles on dark charcoal surface",
    colors: null,
    size: "2.25mm",
    type: "needle",
    filters: []
  },
  {
    id: 7,
    name: "Velvet Plum Cotton",
    category: "Crochet Threads",
    price: 19.50,
    badge: { text: "Limited Edition", position: "left", color: "secondary" },
    description: "Deep plum cotton thread with a velvety finish. Perfect for winter accessories and amigurumi.",
    images: {
      "#5e2b3a": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#8a4b2a": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY",
      "#7d525f": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs"
    },
    imageAlt: "Plum-colored cotton thread spool on natural wood",
    colors: ["#5e2b3a", "#8a4b2a", "#7d525f"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Cotton"]
  },
  {
    id: 8,
    name: "Rosewood Comfort Hook",
    category: "Crochet Needles",
    price: 22.00,
    badge: null,
    description: "Luxurious rosewood handle with smooth brass tip. Ergonomic design for arthritis relief.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7RbsEMwOCQdsx4P-Argx1RWplxi0zemwaGzcRQlgyaacEoKQtbZDi44re5t0Lv9I7HYKHD2YiuZ-28ZOguPojQmTesYqBblOo_TkbN0H44pdyYOC1o7R7tVfxf4xtgr7JmaZKtLJEC3tfJiZ8Sr146y45BkvqUwxCs10WAGT1gP2YpgUkRO_kRBwOvZNm0Eho8Us49T-a3B-ZSbsprZf5t5Rmjnczxilk9ASYcbmSkRBK5rThqlXlk3MkjrcCLNV5Kjz_YXJRrfs",
    imageAlt: "Rosewood crochet hook with brass tip on cream fabric",
    colors: null,
    size: "6.0mm",
    type: "needle",
    filters: []
  },
  {
    id: 9,
    name: "Glacier Blue Alpaca",
    category: "Crochet Threads",
    price: 28.00,
    badge: { text: "Premium", position: "right", color: "primary" },
    description: "Baby alpaca and silk blend. Incredibly soft with a subtle halo effect.",
    images: {
      "#6b8e9c": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY",
      "#eeb8c7": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#fbf9f4": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs"
    },
    imageAlt: "Blue alpaca yarn skein in soft natural lighting",
    colors: ["#6b8e9c", "#eeb8c7", "#fbf9f4"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Silk Blend"]
  },
  {
    id: 10,
    name: "Mini Lace Steel Set",
    category: "Crochet Needles",
    price: 34.99,
    badge: { text: "Best Seller", position: "left", color: "tertiary" },
    description: "Complete set of 8 steel hooks for fine lace work. Sizes 0.6mm to 1.75mm in leather case.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-T7t8i1OThvPfKKamwYylNXZX6s80A6IJkwp0UfR2mZTeMy-KgQE2YDfpnoF6NmV_kSzo1RJ1cIL36Z0eZOh5ek6w66Kax-eARBowqk7c6Gr5OjHTwDLqtRtMVn_Et23xr4sVP8OE2r1suhvBrNFI8JrWiVAy4yrtPPASHTtjvv5rnwBOnBNO9RbhJsN6XtITT-V5E9YvlIaChdkMWcO79YUv5dZ9Vfp5TKxk0aZp9424LZlERpDSxkPu1mF9Dr0PejFHHRTWvZY",
    imageAlt: "Set of mini steel crochet hooks in leather case",
    colors: null,
    size: "Set 0.6-1.75mm",
    type: "needle",
    filters: []
  },
  {
    id: 11,
    name: "Goldenrod Marigold",
    category: "Crochet Threads",
    price: 17.00,
    badge: null,
    description: "Vibrant golden yellow organic cotton. Colorfast and perfect for heirloom projects.",
    images: {
      "#e0a33e": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs",
      "#8a4b2a": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#becca3": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY"
    },
    imageAlt: "Bright yellow yarn skein on rustic wooden table",
    colors: ["#e0a33e", "#8a4b2a", "#becca3"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Cotton", "Organic"]
  },
  {
    id: 12,
    name: "Interchangeable Hook Kit",
    category: "Crochet Needles",
    price: 89.00,
    badge: { text: "Ultimate", position: "right", color: "secondary" },
    description: "Professional interchangeable system with 12 hook sizes and 4 cables. Premium bamboo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxrixXPVuxeU5wptIMRCtHje0zfg6WsW84hF33mgOm8CTUmqAO0Xbb4ijkzDqvUrt84KiU0AJ3XD96PZExkOr5D09oL69FKfmhC3XDs6re5W-5j4i4em802Lz8015Z6b5fMrpu6IW_SPJyHmckI4VX4Hxs-m7q5U70lkmeAkhXjD_2rXwu_RnclK6yKn-XynrHHv75oQcRwsHP47s7CxMEFtf5jJhDP3nzo1Sn9dkG9sKc5SKGfX3r2ygDWKC-ovhnaFJtpT9Z49M",
    imageAlt: "Deluxe interchangeable crochet hook kit in walnut case",
    colors: null,
    size: "12 sizes",
    type: "needle",
    filters: []
  },
  {
    id: 13,
    name: "Mist Heather Tweed",
    category: "Crochet Threads",
    price: 21.50,
    badge: { text: "New Arrival", position: "left", color: "primary" },
    description: "Soft wool blend with tweed flecks. Perfect for cozy winter garments and accessories.",
    images: {
      "#8b9a8f": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs",
      "#7d525f": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#becca3": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY"
    },
    imageAlt: "Heathered tweed yarn in misty gray-green tone",
    colors: ["#8b9a8f", "#7d525f", "#becca3"],
    activeColorIndex: 0,
    type: "thread",
    filters: []
  },
  {
    id: 14,
    name: "Crystal Acrylic Hook",
    category: "Crochet Needles",
    price: 16.00,
    badge: null,
    description: "Beautiful crystal-clear acrylic hook. Smooth finish glides through all yarn types.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7RbsEMwOCQdsx4P-Argx1RWplxi0zemwaGzcRQlgyaacEoKQtbZDi44re5t0Lv9I7HYKHD2YiuZ-28ZOguPojQmTesYqBblOo_TkbN0H44pdyYOC1o7R7tVfxf4xtgr7JmaZKtLJEC3tfJiZ8Sr146y45BkvqUwxCs10WAGT1gP2YpgUkRO_kRBwOvZNm0Eho8Us49T-a3B-ZSbsprZf5t5Rmjnczxilk9ASYcbmSkRBK5rThqlXlk3MkjrcCLNV5Kjz_YXJRrfs",
    imageAlt: "Transparent acrylic crochet hook on soft background",
    colors: null,
    size: "4.5mm",
    type: "needle",
    filters: []
  },
  {
    id: 15,
    name: "Midnight Velvet",
    category: "Crochet Threads",
    price: 26.00,
    badge: null,
    description: "Deep navy bamboo-cotton blend with subtle sheen. Elegant drape for shawls.",
    images: {
      "#1a2a3a": "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSHzQXRu_GGXBQoUPYZcdv3-zSs1PujeGtHFAclN4hV3g9yIw-8im4LPXTaIA4dhNPA_OvETbrQGziSWi0wEavyrqiKBgmNSyAAXrVNo8qb7UytlYhNVGfIf-P2_pP-e0zeMyFI66r6DAt0IjMbyo07sue79qHRZYOGqcvY8FKF5VkNGGY27t7QbgeBdRnvdAFY08_NvFGj1PZYgJx96QIGzr_OtxINeFMPjT8FlN2QIMGLDtUwJ0vlnSh2pP0p0vYYJZKpGKsHY",
      "#eeb8c7": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIwTk9Opydkr90EFRzQG8UteOWGqdJ4Yk9IivrCtlNfl8j9_0d_-lCewtleBJIXWsQ3a-Sq_b7UnljK2V_swLkNHOjbza1_4Xj-ag1UR6p6toOLEteiXaHHnrk3tCBTETIEXeiyhJDh_rhSZDdQn5Z776Bz_lQBZlVeEW-XtZn_XoSviEQfcJbyljjIGwic8t49Wd78nsz0rhHdCEPnM2FVcz5kWZZTIigqINEgy7awTKTyia-fdr2iibNnERaJ9URzDdt7vYJMw",
      "#fbf9f4": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1kJlYjbAq7sRAzFaylsLIT9FmKiv7xboIc0ftU-4D4TEM6iEWZ5RQuODdKRdbcFDg_ckj3c5AAr6lic6a4eCx6KeOkGsMAbOVsl_mEd_ZD9oII9AVqplRAjkHEiKHG_BMvV5MunlRS8BDTN5ioqJ3mAmANupGNqASRHNMXABEQ1WFWuy3Stp8PyogZuHdDS8KMkXvz7BKnmz2qybS9qd_QW8qoCCih-u-34tQcT8LLc-G0nQUAb3pSY_5eacXWCOcnZRlhWNRBs"
    },
    imageAlt: "Navy blue yarn with subtle metallic sheen",
    colors: ["#1a2a3a", "#eeb8c7", "#fbf9f4"],
    activeColorIndex: 0,
    type: "thread",
    filters: ["Silk Blend"]
  }
];