function solve(string, substring) {

    if(string.startsWith(substring, 0)){

       return true;
    }

    return false;
}

solve('How have you been?', 'How')