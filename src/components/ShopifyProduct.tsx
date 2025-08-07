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
    // Clear any existing products first
    const container = document.getElementById('product-component-1754077765374')
    if (!container) return

    // Clear container content to prevent duplicates
    container.innerHTML = ''

    // Enhanced duplicate prevention
    if (window.CURE_PRODUCT_CREATED) {
      return
    }

    // Mark as created immediately
    window.CURE_PRODUCT_CREATED = true

    const loadShopify = () => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
      
      // Check if script already exists
      const existingScript = document.querySelector(`script[src="${scriptURL}"]`)
      if (existingScript) {
        // Script already loaded, just create the component
        if (window.ShopifyBuy) {
          createProduct()
        }
        return
      }
      
      const script = document.createElement('script')
      script.async = true
      script.src = scriptURL
      document.head.appendChild(script)
      
      script.onload = () => {
        createProduct()
      }
    }

    const createProduct = () => {
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
                  "position": "relative",
                  "font-weight": "500",
                  "color": "#faf4ed",
                  "background-color": "#3e342f",
                  "border-radius": "0px",
                  "padding-left": "32px",
                  "padding-right": "32px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "font-size": "15px",
                  "letter-spacing": "1px",
                  "transition": "all 0.3s ease",
                  "overflow": "hidden",
                  "text-transform": "uppercase",
                  ":hover": {
                    "color": "#3F352F"
                  },
                  ":focus": {
                    "background-color": "#382f2a",
                    "color": "#faf4ed"
                  }
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
                "button": "ADD TO CART"
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
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-weight": "500",
                  "color": "#faf4ed",
                  "background-color": "#3e342f",
                  "border-radius": "0px",
                  "transition": "all 0.3s ease",
                  ":hover": {
                    "color": "#3e342f",
                    "background-color": "#faf4ed"
                  },
                  ":focus": {
                    "background-color": "#382f2a"
                  }
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
                  "font-weight": "500",
                  "background-color": "#3e342f",
                  "transition": "all 0.3s ease",
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

    loadShopify()
    
    // Reset flag on cleanup so it can work on navigation
    return () => {
      window.CURE_PRODUCT_CREATED = false
      // Clear container on cleanup
      if (container) {
        container.innerHTML = ''
      }
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