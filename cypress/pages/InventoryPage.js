class InventoryPage{
    elements = {
      sauce_labs_backpack: () => cy.get("#add-to-cart-sauce-labs-backpack"),
      sauce_labs_bike_light: () => cy.get("#add-to-cart-sauce-labs-bike-light"),
      sauce_labs_bolt_t_shirt: () => cy.get("#add-to-cart-sauce-labs-bolt-t-shirt"),
      sauce_labs_fleece_jacket: () => cy.get("#add-to-cart-sauce-labs-fleece-jacket"),
      sauce_labs_onesie: () => cy.get("#add-to-cart-sauce-labs-onesie"),
      sauce_t_shirt: () => cy.get("#add-to-cart-test.allthethings()-t-shirt-(red)"),
      shopping_cart_container: () => cy.get("#shopping_cart_container"),
      shopping_cart_badge: () => cy.get(".shopping_cart_badge")
    };
  
    addItemToCart(item) {

        if(item === "Sauce Labs Backpack"){
            this.elements.sauce_labs_backpack().should('be.visible').should('be.enabled').click()
        }
        else if(item === "Sauce Labs Bike Light"){
            this.elements.sauce_labs_bike_light().should('be.visible').should('be.enabled').click()
        }
        else if(item === "Sauce Labs Bolt T-Shirt"){
            this.elements.sauce_labs_bolt_t_shirt().should('be.visible').should('be.enabled').click()
        }
        else if(item === "Sauce Labs Fleece Jacket"){
            this.elements.sauce_labs_fleece_jacket().should('be.visible').should('be.enabled').click()
        }
        else if(item === "Sauce Labs Onesie"){
            this.elements.sauce_labs_onesie().should('be.visible').should('be.enabled').click()
        }
        else if(item === "Test.allTheThings() T-Shirt (Red)"){
            this.elements.sauce_t_shirt().should('be.visible').should('be.enabled').click()
        }else{
            expect("Unavailable_Item").to.equal(item)
        }
      
    }

    clickOnShoppingCartContainer() {
        this.elements.shopping_cart_container().should('be.visible').click();
    }

    verifyCartItems(text) {
        this.elements.shopping_cart_badge().should('have.text', text)
    }
  
  }
  
  module.exports = new InventoryPage();
  