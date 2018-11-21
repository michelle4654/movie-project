class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        GrammarList = []
        beginningchars = ['(','{','[']
        for letter in s:
            if letter in beginningchars:
                GrammarList.append(letter)
            elif GrammarList:
                print GrammarList
                if letter == ')' and GrammarList[-1]=='(':
                    GrammarList.pop()
                if letter == '}' and GrammarList[-1]=='{':
                    GrammarList.pop()
                if letter == ')' and GrammarList[-1]=='(':
                    GrammarList.pop()
        if GrammarList.isEmpty():
            return True
        else:
            return False