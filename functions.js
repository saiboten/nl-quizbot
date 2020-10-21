module.exports = {
  isAllowedToIssuecommand: function(message) {
    return message.member.roles.cache.some(role => role.name === 'Quizmaster');  
  }
};
