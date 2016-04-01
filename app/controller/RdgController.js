/*
 * File: app/controller/RdgController.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Contacts.controller.RdgController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.rdgcontroller',

    config: {
        refs: {
            rdglist: 'rdglist',
            rdgnavview: 'rdgnavview'
        },

        control: {
            "rdglist": {
                itemtap: 'onRdgListItemTap'
            }
        }
    },

    onRdgListItemTap: function(dataview, index, target, record, e, eOpts) {

        Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Моля, изчакайте ...', indicator:true});

        var podid = record.get('Pod_Id');
        var podname = record.get('Pod_NameBg');

        var store = Ext.getStore('PodUserJsonPStore',{
            autoLoad:false
        });
        store.load(
            {
                params: {
                    podid: podid
                },

                callback: function(records, operation, success) {

                    if(success)
                    {
                        Ext.Viewport.setMasked(false);
                        this.getRdgnavview().push({
                            xtype:'poduserlist',
                            title: podname
                        });
                        console.log('success');
                    }
                    else
                    {
                        Ext.Viewport.setMasked(false);
                        Ext.Msg.alert('Събщение', 'Няма регистрирана такова лице.', Ext.emptyFn);
                        console.log('unsuccess');
                    }
                },
                scope: this
            });

    }

});