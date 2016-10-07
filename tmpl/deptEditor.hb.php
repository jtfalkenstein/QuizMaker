<?php

/* 
 * Copyright (C) 2016 Jon
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
?>

<div class="deptEditor container">
    {{#if Id}}
    <h2>Edit department</h2>
    {{else}}
    <h2>Create department</h2>
    {{/if}}
    <div class="form-group">
        <label>
            Department Name:
            <input type="text" name="Name" value="{{Name}}">
        </label>
    </div>
    <button class="saveButton btn btn-primary">Save</button>
    <button class="deleteButton btn btn-danger">Delete</button>
</div>
