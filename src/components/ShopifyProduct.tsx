import { useEffect } from 'react'
import './ShopifyProduct.css'

declare global {
  interface Window {
    ShopifyBuy: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => unknown;
      UI: {
        onReady: (client: unknown) => Promise<{
          createComponent: (type: string, options: unknown) => void;
        }>;
      };
    };
    CURE_PRODUCT_CREATED: boolean;
  }
}

const ShopifyProduct = () => {
  useEffect(() => {
    // Simple global check - if product was already created, skip
    if (window.CURE_PRODUCT_CREATED) {
      return
    }

    const container = document.getElementById('product-component-1754077765374')
    if (!container) return

    // Mark as created immediately
    window.CURE_PRODUCT_CREATED = true

    const loadShopify = () => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
      
      const script = document.createElement('script')
      script.async = true
      script.src = scriptURL
      document.head.appendChild(script)
      
      script.onload = () => {
        const client = window.ShopifyBuy.buildClient({
          domain: '94bb1f-d5.myshopify.com',
          storefrontAccessToken: '1b45ead5be14458e8fca140445cd3794',
        })
        
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '8645711528174',
            node: container,
            moneyFormat: '%24%7B%7Bamount_no_decimals%7D%7D',
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0",
                      "margin-bottom": "50px"
                    },
                    "text-align": "left"
                  },
                  "title": {
                    "font-size": "26px",
                    "color": "#3e342f"
                  },
                  "button": {
                    "font-weight": "bold",
                    "color": "#faf4ed",
                    ":hover": {
                      "color": "#3e342f",
                      "background-color": "#faf4ed"
                    },
                    "background-color": "#3e342f",
                    ":focus": {
                      "background-color": "#382f2a"
                    },
                    "border-radius": "0px",
                    "padding-left": "53px",
                    "padding-right": "53px"
                  },
                  "price": {
                    "font-size": "18px",
                    "color": "#3e342f"
                  },
                  "compareAt": {
                    "font-size": "15.299999999999999px",
                    "color": "#3e342f"
                  },
                  "unitPrice": {
                    "font-size": "15.299999999999999px",
                    "color": "#3e342f"
                  }
                },
                "layout": "horizontal",
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "description": true
                },
                "width": "100%",
                "text": {
                  "button": "Add to cart"
                }
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    "font-weight": "bold",
                    "color": "#faf4ed",
                    ":hover": {
                      "color": "#3e342f",
                      "background-color": "#faf4ed"
                    },
                    "background-color": "#3e342f",
                    ":focus": {
                      "background-color": "#382f2a"
                    },
                    "border-radius": "0px",
                    "padding-left": "53px",
                    "padding-right": "53px"
                  },
                  "title": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "bold",
                    "font-size": "26px",
                    "color": "#4c4c4c"
                  },
                  "price": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "18px",
                    "color": "#4c4c4c"
                  },
                  "compareAt": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#4c4c4c"
                  },
                  "unitPrice": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#4c4c4c"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "option": {},
              "cart": {
                "styles": {
                  "button": {
                    "font-weight": "bold",
                    "color": "#faf4ed",
                    ":hover": {
                      "color": "#3e342f",
                      "background-color": "#faf4ed"
                    },
                    "background-color": "#3e342f",
                    ":focus": {
                      "background-color": "#382f2a"
                    },
                    "border-radius": "0px"
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout"
                }
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "font-weight": "bold",
                    "background-color": "#3e342f",
                    ":hover": {
                      "background-color": "#382f2a"
                    },
                    ":focus": {
                      "background-color": "#382f2a"
                    }
                  },
                  "count": {
                    "color": "#faf4ed",
                    ":hover": {
                      "color": "#faf4ed"
                    }
                  },
                  "iconPath": {
                    "fill": "#faf4ed"
                  }
                }
              }
            }
          })
        })
      }
    }

    loadShopify()
    
    // Reset flag on cleanup so it can work on navigation
    return () => {
      window.CURE_PRODUCT_CREATED = false
    }
  }, [])

  return (
    <section className="shopify-section">
      <div className="container">
        <div className="shopify-content">
          <div id="product-component-1754077765374"></div>
        </div>
      </div>
    </section>
  )
}

export default ShopifyProduct 