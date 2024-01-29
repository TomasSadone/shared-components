import { useState } from 'react';
import {
  Table,
  TData,
  TRow,
  TableContent,
  ActionIcons,
  MultipleBadges,
  Text,
  AppButton,
  Pagination,
  SingleColorViewer,
  FormDropdown,
} from '../../';
import { ColorPicker } from '../../lib/components/Editor/ColorPicker';
import { BadgeProps } from '../../lib/components/MultipleBadges';
import { Tooltip } from '../../lib/main';

export const Tables = () => {
  const badges: BadgeProps[] = [
    { text: 'Cliente VIP', color: 'green', withDot: false },
    { text: 'Cliente Fedele', color: 'blue', withDot: false },
    {
      text: 'Acquisito negli ultimi mesi',
      color: 'blue',
      withDot: false,
    },
    { text: 'Extra tag 1', color: 'green', withDot: false },
    { text: 'Extra tag 2', color: 'blue', withDot: false },
    {
      text: 'Extra tag 3 with much more text than the others two',
      color: 'blue',
      withDot: false,
    },
  ];
  const [color, setColor] = useState('#fff');

  return (
    <Table>
      <div style={{ display: 'grid', gap: '1rem', padding: '1rem', justifyItems: 'start' }}>
        <h1>Table title</h1>
        <p>table description</p>
        <AppButton title="Some button" color="green" />
        <AppButton title="Other button" color="green" />
        <p>Any content</p>
      </div>

      <TableContent>
        <thead>
          <TRow border={false} darkerBackground="never">
            <TData location="head">Header</TData>
            <TData location="head">Header</TData>
            <TData location="head">Header</TData>
            <TData location="head">Header</TData>
          </TRow>
        </thead>
        <tbody>
          <TRow darkerBackground="intermitent">
            <TData>
              <Text text="Tomas Sadone" isLeadText supportingText="tomas.sadone@aigot.com" />
            </TData>
            <TData>
              <Text text="+54 9567194018" />
            </TData>
            <TData>
              <MultipleBadges badges={badges} />
            </TData>
            <TData>
              <ActionIcons
                icons={[
                  { name: 'add', onClick: () => null },
                  { name: 'plus-circle', onClick: () => null },
                ]}
              />
            </TData>
          </TRow>
          <TRow darkerBackground="intermitent">
            <TData>
              <Text text="Tomas Sadone" isLeadText supportingText="tomas.sadone@aigot.com" />
            </TData>
            <TData>
              <Text text="+54 9567194018" />
            </TData>
            <TData>
              <MultipleBadges badges={badges} />
            </TData>
            <TData>
              <ActionIcons
                icons={[
                  { name: 'add', onClick: () => null },
                  { name: 'plus-circle', onClick: () => null },
                ]}
              />
            </TData>
          </TRow>
          <TRow darkerBackground="intermitent">
            <TData>
              <Text text="Tomas Sadone" isLeadText supportingText="tomas.sadone@aigot.com" />
            </TData>
            <TData>
              <Text text="+54 9567194018" />
            </TData>
            <TData>
              <MultipleBadges badges={badges} />
            </TData>
            <TData>
              <ActionIcons
                icons={[
                  { name: 'add', onClick: () => null },
                  { name: 'plus-circle', onClick: () => null },
                ]}
              />
            </TData>
          </TRow>
        </tbody>
      </TableContent>
      <div style={{ display: 'grid', gap: '1rem', padding: '1rem', justifyItems: 'start' }}>
        <Pagination
          handleNextPage={() => null}
          handlePrevPage={() => null}
          handlePageSelection={(number: number) => null}
          page={3}
          totalPages={10}
          prevNextButtons="text"
          type="default"
          align="center"
          numbers="square"
        />
      </div>
    </Table>
  );
};
