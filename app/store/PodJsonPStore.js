/*
 * File: app/store/PodJsonPStore.js
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

Ext.define('Contacts.store.PodJsonPStore', {
    extend: 'Ext.data.Store',
    alias: 'store.podjsonpstore',

    requires: [
        'Contacts.model.PodModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Contacts.model.PodModel',
        storeId: 'PodJsonPStore',
        proxy: {
            type: 'jsonp',
            url: 'https://system.iag.bg/iagSys/resources/php/rug.php',
            reader: {
                type: 'json'
            }
        }
    }
});