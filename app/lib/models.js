import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    created_user: {
      required: false,
      type: Object,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    isCustomer: {
      type: Boolean,
      required: true,
      default: true,
    },
    name: {
      type: String,
    },
    surname: {
      type: String,
    },

    email: {
      type: String,
      required: false,
      min: 6,
      max: 15,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      trim: true,
    },
    role: {
      type: Object,
      default: {
        staffonlyyou: true,
        "staff/add": true,
        "staff/id": true, //edit
        "staff/list": true,
        staffdelete: true,
        staffview: true,
        customersonlyyou: true,
        "customers/add": true,
        "customers/id": true,
        "customers/list": true,
        customersdelete: true,
        customersview: true,
        productsonlyyou: true,
        "products/add": true,
        "products/id": true,
        "products/list": true,
        productsdelete: true,
        productsview: true,
        productimagesonlyyou: true,
        "productimages/add": true,
        "productimages/id": true,
        "productimages/list": true,
        productimagesdelete: true,
        productimagesview: true,
        categoriesonlyyou: true,
        "categories/add": true,
        "categories/id": true,
        "categories/list": true,
        categoriesdelete: true,
        categoriesview: true,
        variantsonlyyou: true,
        "variants/add": true,
        "variants/id": true,
        "variants/list": true,
        variantsdelete: true,
        variantsview: true,
        ordersonlyyou: true,
        "orders/add": true,
        "orders/id": true,
        "orders/list": true,
        ordersdelete: true,
        ordersview: true,
      },
    },

    image: {
      type: String,
    },
    company: {
      type: String,
      trim: true,
    },

    taxoffice: {
      type: String,
      trim: true,
    },

    taxnumber: {
      type: String,
    },

    ssn: {
      type: String,
    },
    executive: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
    },
    prefix: {
      type: String,
    },
    fax: {
      type: String,
    },
    web: {
      type: String,
    },
    risk: {
      type: Number,
    },

    address: [
      {
        type: {
          type: Boolean,
          default: true,
        },
        name: {
          type: String,
        },
        country_id: {
          type: String,
          default: "India",
        },
        state_id: {
          type: String,
        },
        city_id: {
          type: String,
        },
        town_id: {
          type: String,
        },
        district_id: {
          type: String,
        },
        village_id: {
          type: String,
        },
        address: {
          type: String,
        },
      },
    ],

    spesific_id: {
      type: String,
    },

    resetPasswordToken: {
      type: String,
      default: "asdasdasdas--example--6yhjkoıu7654esxcvbhythbvfde45ty",
    },
    resetPasswordExpires: {
      type: Date,
      default: Date.now(),
    },
    dob: {
      type: Date,
      required: false,
    },
    verificationToken: {
      type: String,
      required: false,
    },
    emailVerified: {
      type: Boolean,
      required: false,
      default: false,
    },
    otp: {
      type: Number,
    },
    googleId: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    loginType: {
      type: String,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// const productSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     stock: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     img: {
//       type: String,
//     },
//     color: {
//       type: String,
//     },
//     size: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

export const Users =
  mongoose.models.Users || mongoose.model("Users", UsersSchema);
// export const Product =
//   mongoose.models.Product || mongoose.model("Product", productSchema);
