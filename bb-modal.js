/**
 * Author: Nihar Jyoti sarma

 Bootstrap and Backbone combine modal

 To run this modal

 1. define bb.commonModal in your view
 2.  Backbone.commonModal.modalOpen({
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

    // all config attributes

    var defaultOptions = {
        whereToAppend : 'body',
        modalId : 'bbModal',
        modalTitle : '',
        modalBody : '',
        modalDisplay :  '.modal',
        title : false,
        okText :  'Ok',
        cancelText : 'Cancel',
        showFooter :  false,
        allowCancel :  false

    };
    Backbone.commonModal = {

        /**
         * This function will show the modal
         */

        modalOpen: function() {
            var opts = _.extend({}, defaultOptions, arguments[0]);

            var template = _.template('\
            <div class="modal fade" id="<%= obj.modalId %>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
              <div class="modal-dialog"><div class="modal-content">\
              <% if (obj.title) { %>\
                <div class="modal-header" style="margin-bottom: 0px;  padding: 15px 15px 5px;">\
                  <h3><%= obj.modalTitle %></h3>\
                </div>\
            <% } %>\
              <div class="modal-body"><%= obj.modalBody %></div>\
              <a href="javascript:void(0)" class="icon icon-circle-sm" data-dismiss="modal" title="close" style="position: absolute;top: -10px;right: -8px;height: 25px;width: 25px;margin: 0;color: #fff;border: 1px solid #DB0A5B;border-radius:30px;background: #DB0A5B;font-size: 17px;font-weight: bold;display: inline-block;line-height: 0px;padding: 12px 6px;">X</a>\
              <% if (obj.showFooter) { %>\
                <div class="modal-footer">\
                    <% if (obj.allowCancel) { %>\
                      <a href="#" class="btn cancel close" data-dismiss="modal"><%= obj.cancelText %></a>\
                    <% } %>\
                  <a href="#" class="btn ok btn-primary"><%= obj.okText %></a>\
                </div>\
              <% } %>\
              </div></div></div>\
            ')({"obj":opts});

            $("#"+opts.modalId).remove();
            $(opts.whereToAppend).append(template);
            $("#"+opts.modalId).modal('show');

        },

        /**
         * This function will close the modal
         */

        modalClose: function() {
            var opts = _.extend({}, defaultOptions, arguments[0]);
            $("#"+opts.modalId).modal('hide');
        }

    };
    return Backbone.commonModal;
}));
