/*
 * File: app/view/TasksViewModel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TaskList.view.TasksViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tasks',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Direct',
        'TaskList.DirectAPI',
        'Ext.data.reader.Json'
    ],

    stores: {
        tasks: {
            autoLoad: true,
            autoSync: true,
            model: 'TaskList.model.Task',
            proxy: {
                type: 'direct',
                api: {
                    create: 'Server.SA.Task.create',
                    read: 'Server.SA.Task.read',
                    update: 'Server.SA.Task.update',
                    destroy: 'Server.SA.Task.destroy'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    rootProperty: 'data'
                }
            }
        }
    }

});