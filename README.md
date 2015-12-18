# backbone-bootstrap-commonModal
This plugin combine backbone and bootstrap
How to set up this plugin

1.Include bootstrap.js file  

2.define bb.commonModal in your view


define(["jquery",
        "backbone",
        "underscore","bb.commonModal"],
    function ($,
              Backbone,
              _,bbModal) {
              
3.Then call the modalOpen function


Backbone.commonModal.modalOpen.call({

                    whereToAppend: "body",
                    
                    modalId: "offerMoreModal",
                    
                    modalTitle: "your description",
                    
                    allowCancel: true,
                    
                    showFooter: true,
                    
                    cancelText: "cancel",
                    
                    modalBody:  "Your body context"
                    
                })              
              
