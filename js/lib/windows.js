/* 
 * Copyright (C) 2016 jtfalkenstein
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

define(['repository', 'dataObjects', 'quizMaker','underscore', 'handlebars'],function(repository, dos, qm, _, hb){
    
    var deptEditorTemplate = hb.compile($('#deptEditor-template').html());
    //var quizCreatorTemplate = Handlebars.compile($('#quizCreator-template').html());
    var navBarTemplate = hb.compile($('#navBar-template').html());

    
    function deptEditor(department){
        this.model = department;
        this.template = deptEditorTemplate;
        this.saveButton.click(this,function(e){
            var dept = new dos.department(e.data.data);
            var id = qm.bind('departments').to(function(depts){
                var d = _.findWhere(depts, {Name: dept.Name});
                if(!!d) qm.currentDepartment = d;
                qm.unbind('departments', id);
            });
            repository.storeDepartment(dept);
            e.data.hide();
        });
        this.deleteButton.click(this, function(e){
            var val = e.data.data['Id'];
            repository.deleteDepartment(val);
            e.data.hide();
        });
        //TODO: add cancel button
    }
    
    function quizCreator(quiz){
        this.model = quiz;
        this.template = quizCreatorTemplate;
        this.dom = this.getDom();
    }
    
    
    var mainWindow = {
        get saveButton(){
            return this.dom.find('.saveButton');
        },
        get deleteButton(){
            return this.dom.find('.deleteButton');
        },
        get data(){
            var data = {};
            var inputs = this.dom.find('input, textarea, select');
            inputs.each(function(i, el){
                data[el.name] = $(el).val();
            });
            return data;
        },
        render: function(){
            $('#mainCanvas').html('').append(this.dom);
        },
        hide: function(){
            this.dom.hide(500);
        },
        show: function(){
            this.dom.show(500);
        },
        get dom(){
            if(!this._dom){
                var html = this.template(this.model);
                this._dom = $(html);
            }
            return this._dom;
        },
        get template(){
            return this._template;
        },
        set template(x){
            this._template = x;
        },
        get model(){
            return this._model;
        },
        set model(x){
            this._model = x;
        }
    };
    
    function navBar(){
        this.template = navBarTemplate;
        this.model = qm;
    }
    
    
    var navProto = {
        render: function(){
            delete this._dom;
            this.dom.find('[data-department]').click(this,function(e){
                var jq = $(this);
                qm.currentDepartment = qm.departments[jq.data('id')];
            });
            this.dom.find('[data-quiz]').click(function(){
                var jq = $(this);
                qm.setQuiz(jq.data('id'));
            }); 
            this.dom.find('#createDepartment').click(function(){
                var de = new deptEditor();
                de.render();
            });
            this.dom.find('#editDept').click(function(){
                var dept = qm.currentDepartment;
                var de = new deptEditor(dept);
                de.render();
            });
            $('#navBarContainer').html('').append(this.dom);
            
        },
        get dom(){
            if(!this._dom){
                this._dom = $(this.template(this.model));
            }
            return this._dom;
        },
        get template(){
            return this._template;
        },
        set template(x){
            this._template = x;
        },
        get model(){
            return this._model;
        },
        set model(x){
            this._model = x;
        }
    };
    
    deptEditor.prototype = mainWindow;
    quizCreator.prototype = mainWindow;
    
    navBar.prototype = navProto;
    
    
    return {
        deptEditor: deptEditor,
        quizCreator: quizCreator,
        navBar: navBar
    };
});