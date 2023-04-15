import * as C from './style';

export const Post = () => {
  
  return (
    <C.Container>
      <h2>What's on your mind?</h2>
      <div>
        <label>Title</label>
        <input type="text" placeholder='type' />
      </div>
      <div>
        <label>Content
          <textarea  cols={92} rows={4} maxLength={5000} placeholder='Content here' />
        </label>
      </div>
      <div>Create</div>
    </C.Container>
  )
};