/**
 * Styled Card component that is reused in the Board component
 */

const StyledCard = ({ header = 'header', title = 'title', content = 'content', id, input }) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      class='block min-w-[23rem] max-w-xl rounded-lg bg-third shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'
    >
      <div class='border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50'>
        {header}
      </div>
      <div class='p-6'>
        <h5 class='mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50'>
          {title}
        </h5>
        <p class='text-base text-white dark:text-neutral-50'>{content}</p>
        {input}
      </div>
    </div>
  );
};
export default StyledCard;
