const SelectMenu = ({
  textureGroups,
  selectedTexture,
  setSelectedTexture,
}: any) => {
  const handleTextureChange = (newTexture: any) => {
    setSelectedTexture(newTexture);
  };
  return (
    <>
      {textureGroups.map((group: any) => (
        <div key={group.groupName} className="select-container">
          <h3>{group.groupName}</h3>
          <select
            value={selectedTexture}
            onChange={(e) => handleTextureChange(e.target.value)}
          >
            {group.options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
};

export default SelectMenu;
