/// <reference path='./crud.d.ts' />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

let row: RowElement = {
  firstName: 'John',
  lastName: 'Doe',
};

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(newRowID);
