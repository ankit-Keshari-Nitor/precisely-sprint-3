import React from 'react';
import { DropZone } from '../../elements';
import classNames from 'classnames';
import FieldRenderer from './field-renderer/field-renderer';

export default function Canvas({ layout, handleDrop, renderRow, componentMapper, onFieldSelect, onFieldDelete, previewMode = false, onChangeHandle }) {
  const renderComponent = (component, currentPath, renderRow) => {
    return (
      <div
        onClick={(e) => {
          !previewMode && onFieldSelect(e, component, currentPath);
        }}
        className={classNames(previewMode ? 'form-fields' : 'canvas-form-fields')}
      >
        <FieldRenderer
          key={component.id}
          data={component}
          path={currentPath}
          componentMapper={componentMapper}
          renderRow={renderRow}
          handleDrop={handleDrop}
          onFieldDelete={onFieldDelete}
          onFieldSelect={onFieldSelect}
          previewMode={previewMode}
          onChangeHandle={onChangeHandle}
        />
      </div>
    );
  };

  return (
    <>
      {layout.map((component, index) => {
        const currentPath = `${index}`;
        return (
          <React.Fragment key={component.id}>
            {!previewMode && (
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: layout.length
                }}
                onDrop={handleDrop}
                path={currentPath}
              />
            )}
            {renderComponent(component, currentPath, renderRow)}
          </React.Fragment>
        );
      })}
      {!previewMode && (
        <DropZone
          data={{
            path: `${layout.length}`,
            childrenCount: layout.length
          }}
          onDrop={handleDrop}
          isLast
        />
      )}
    </>
  );
}
