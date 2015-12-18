/**
 * Author: NIHAR JYOTI SARMA

 Bootstrap and Backbone common modal

 To run this modal

 1. define bb.commonModal in your view
 2.  Backbone.commonModal.modalOpen.call({
                    whereToAppend: ".page-home",
                    modalId: "offerMoreModal",
                    modalTitle: "Promotion description",
                    allowCancel: true,
                    showFooter: true,
                    cancelText: "cancel",
                    modalBody:  $("."+target).text()
                })
 **/


(function(root, factory) {
    if (typeof exports !== 'undefined') {
        // Define as CommonJS export:
        module.exports = factory(require('underscore'), require('backbone'), require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // Define as AMD:
        define('bb.modal',['underscore', 'backbone', 'jquery'], factory);
    } else {
        // Just run it:
        factory(root._, root.Backbone);
    }
}(this, function(_, Backbone, $) {
    'use strict';
    Backbone.commonModal = {

        modalOpen: function(){

            // all config attributes

            var whereToAppend = (!!this.whereToAppend) ? this.whereToAppend : 'body',
                modalId = this.modalId || '',
                modalTitle = this.modalTitle || '',
                modalBody = this.modalBody || '',
                modalDisplay = (!!this.modalId) ? '#'+this.modalId : '.modal',
                title = (!!this.modalTitle) ? true : false,
                okText = (!!this.okText) ? this.okText : 'Ok',
                cancelText = (!!this.cancelText) ? this.cancelText : 'Cancel',
                showFooter = (!!this.showFooter) ? this.showFooter : false,
                allowCancel = (!!this.allowCancel) ? this.allowCancel : false,
                cancelText = (!!this.cancelText) ? this.cancelText : false;

            var template = _.template('\
            <div class="modal fade" id="<%= obj.modalId %>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
              <div class="modal-dialog"><div class="modal-content">\
              <% if (title) { %>\
                <div class="modal-header" style="margin-bottom: 0px;  padding: 15px 15px 5px;">\
                  <h3><%= obj.modalTitle %></h3>\
                </div>\
            <% } %>\
              <div class="modal-body"><%= obj.modalBody %></div>\
              <a href="javascript:void(0)" class="icon icon-circle-sm" data-dismiss="modal" title="close" style="position: absolute;top: -10px;right: -8px;height: 25px;width: 25px;margin: 0;color: #fff;border: 1px solid #DB0A5B;border-radius:30px;background: #DB0A5B;font-size: 17px;font-weight: bold;display: inline-block;line-height: 0px;padding: 12px 6px;">X</a>\
              <% if (obj.showFooter) { %>\
                <div class="modal-footer">\
                  <% if (obj.allowCancel) { %>\
                    <% if (cancelText) { %>\
                      <a href="#" class="btn cancel close" data-dismiss="modal"><%= cancelText %></a>\
                    <% } %>\
                  <% } %>\
                  <a href="#" class="btn ok btn-primary"><%= okText %></a>\
                </div>\
              <% } %>\
              </div></div></div>\
            ')({"obj":this,"cancelText":cancelText,"okText":okText,"title":title});

            (modalId != '') ? $("#"+modalId).remove(): '';
            $(whereToAppend).append(template);
            $(modalDisplay).modal('show');

        },

        modalClose: function(){
            var modalId = this.modalId || '#',
                modalDisplay = (!!this.modalId) ? '#'+this.modalId : '.modal';
            $(modalDisplay).modal('hide');
        }

    };
    return Backbone.commonModal;
}));
