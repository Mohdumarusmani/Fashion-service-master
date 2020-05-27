import mongoose, {Document, Schema} from 'mongoose';
import {Product} from 'types/index'

const ProductSchema = new Schema({
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "name": {
      "type": "String"
    },
    "sku": {
      "type": "String"
    },
    "url": {
      "type": "String"
    },
    "brand": {
      "name": {
        "type": "String"
      },
      "sub_brand": {
        "type": "String"
      }
    },
    "media": {
      "standard": {
        "type": [
          "Mixed"
        ]
      },
      "thumbnail": {
        "type": [
          "Mixed"
        ]
      }
    },
    "meta": {
      "breadcrumbs": {
        "1": {
          "type": "String"
        },
        "2": {
          "type": "String"
        },
        "3": {
          "type": "String"
        }
      },
      "bert_original_classification": {
        "l1": {
          "type": "String"
        },
        "l2": {
          "type": "String"
        },
        "l3": {
          "type": "String"
        },
        "l4": {
          "type": "String"
        }
      },
      "reference": {
        "type": "String"
      }
    },
    "website_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "price": {
      "offer_price": {
        "currency": {
          "type": "String"
        },
        "value": {
          "type": "Number"
        }
      },
      "regular_price": {
        "currency": {
          "type": "String"
        },
        "value": {
          "type": "Number"
        }
      },
      "basket_price": {
        "value": {
          "type": "Number"
        },
        "currency": {
          "type": "String"
        }
      }
    },
    "description_text": {
      "type": "String"
    },
    "spider": {
      "type": "String"
    },
    "stock": {
      "available": {
        "type": "Boolean"
      }
    },
    "classification": {
      "l1": {
        "type": "String"
      },
      "l2": {
        "type": "String"
      },
      "l3": {
        "type": "String"
      },
      "l4": {
        "type": "String"
      }
    },
    "created_at": {
      "$date": {
        "type": "Date"
      }
    },
    "updated_at": {
      "$date": {
        "type": "Date"
      }
    },
    "similar_products": {
      "meta": {
        "total_results": {
          "type": "Number"
        },
        "min_price": {
          "regular": {
            "type": "Number"
          },
          "offer": {
            "type": "Number"
          },
          "basket": {
            "type": "Number"
          }
        },
        "max_price": {
          "regular": {
            "type": "Number"
          },
          "offer": {
            "type": "Number"
          },
          "basket": {
            "type": "Number"
          }
        },
        "avg_price": {
          "regular": {
            "type": "Number"
          },
          "offer": {
            "type": "Number"
          },
          "basket": {
            "type": "Number"
          }
        },
        "avg_discount": {
          "type": "Number"
        }
      },
      "website_results": {
        "5da94f4e6d97010001f81d72": {
          "meta": {
            "total_results": {
              "type": "Number"
            },
            "min_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "max_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_discount": {
              "type": "Number"
            }
          },
          "knn_items": {
            "type": "Array"
          }
        },
        "5da94f270ffeca000172b12e": {
          "meta": {
            "total_results": {
              "type": "Number"
            },
            "min_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "max_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_discount": {
              "type": "Number"
            }
          },
          "knn_items": {
            "type": "Array"
          }
        },
        "5d0cc7b68a66a100014acdb0": {
          "meta": {
            "total_results": {
              "type": "Number"
            },
            "min_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "max_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_discount": {
              "type": "Number"
            }
          },
          "knn_items": {
            "type": [
              "Mixed"
            ]
          }
        },
        "5da94ef80ffeca000172b12c": {
          "meta": {
            "total_results": {
              "type": "Number"
            },
            "min_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "max_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_discount": {
              "type": "Number"
            }
          },
          "knn_items": {
            "type": "Array"
          }
        },
        "5da94e940ffeca000172b12a": {
          "meta": {
            "total_results": {
              "type": "Number"
            },
            "min_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "max_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_price": {
              "regular": {
                "type": "Number"
              },
              "offer": {
                "type": "Number"
              },
              "basket": {
                "type": "Number"
              }
            },
            "avg_discount": {
              "type": "Number"
            }
          },
          "knn_items": {
            "type": "Array"
          }
        }
      }
    },
    "positioning": {
      "page": {
        "type": "Number"
      },
      "rank": {
        "type": "Number"
      }
    },
    "lv_url": {
      "type": "String"
    },
    "price_changes": {
      "type": [
        "Mixed"
      ]
    },
    "price_positioning": {
      "type": "Number"
    },
    "price_positioning_text": {
      "type": "String"
    }
});


export interface IProduct extends Document, Product {
}

export const ProductModel = mongoose.model<IProduct>('product', ProductSchema, 'product');