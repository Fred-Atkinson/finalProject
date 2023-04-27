
  
  let comments = [];

 
  function addComment(comment) {
    
    let html = '<div class="comment"><img src="pfp.png" alt="this is a profile picture"><div class="name">' + comment.name + '</div><div class="content">' + comment.content + '</div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>';

    
    $('.comments').prepend(html);

    
    $('.edit').on('click', function() {
      let commentObject = $(this).closest('.comment');
      let name = commentObject.find('.name').text();
      let content = commentObject.find('.content').text();
      let index = $('.comment').index(commentObject);
      
      commentObject.html('<div class="name"><img src="pfp.png" alt="this is a profile picture">'+ comment.content +'</div><div class="content"><textarea class="edit-content">' + content + '</textarea></div><div class="actions"><button class="save">Submit</button><button class="cancel">Cancel</button></div>');

      
      commentObject.find('.save').on('click', function() {
        let editedName = commentObject.find('.edit-name').val();
        let editedContent = commentObject.find('.edit-content').val();

        
        let editedComment =
        {
          content: editedContent
        };
        comments[index] = editedComment;

        
        commentObject.html('<div class="name"><img src="pfp.png" alt="this is a profile picture">'+ comment.name +'</div><div class="content">' + editedContent + '</div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>');

        
        commentObject.find('.edit').on('click', editedComment);
        commentObject.find('.delete').on('click', deleteComment);
      });

      
      commentObject.find('.cancel').on('click', function() {
        
        commentObject.html('<div class="name"><img src="pfp.png" alt="this is a profile picture">' + name + '</div><div class="content">' + content + '</div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>');

        
        commentObject.find('.edit').on('click', editComment);
        commentObject.find('.delete').on('click', deleteComment);
      });
    });

    
    $('.delete').on('click', deleteComment);
  }

  
  function deleteComment() {
   let commentObject = $(this).closest('.comment');
    let index = $('.comment').index(commentObject);

    
    comments.splice(index, 1);

   
    commentObject.remove();
  }

  
  $('#submit').on('click', function() {
    let name = $('#name').val();
    let content = $('#comment').val();

    
    let comment = {
      name: name,
      content: content
    };
    comments.unshift(comment);

    
    $('#name').val('');
    $('#comment').val('');

    
    addComment(comment);
  });

  