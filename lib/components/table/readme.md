# Tables

This file explains where to create new components and the intended structure to use the table

## New components

The idea of the whole structure is to allow developers to easily add new components that will live inside the table's cells under the Table/components folder.

## Usage

```jsx
export const YourTable = () => (
  <Table>
    {/* any content you want in your header, if you want. e.g: */}
    <h2>This is my table</h2>
    <p>And I love it</p>
    {/* or anything more complex */}
    <TableContent>
      <thead>
        <TRow>
          {/* You should have as many TData here as inside your rows in tbody */}
          <TData location="head">Column title 1</TData>
          <TData location="head">Column title 2</TData>
          <TData location="head">Column title 3</TData>
          <TData location="head">Column title 4</TData>
        </TRow>
      </thead>
      <tbody>
        <TRow>
          <TData>{/* Any component you want */}</TData>
          <TData>{/* Any component you want */}</TData>
          <TData>{/* Any component you want */}</TData>
          <TData>{/* Any component you want */}</TData>
        </TRow>
      </tbody>
    </TableContent>
    {/* any content you want in your footer, same as in header, your pagination for example. */}
  </Table>
);
```
