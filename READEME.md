Microsoft Windows [Version 10.0.19045.6466]
(c) Microsoft Corporation. All rights reserved.

C:\Users\user>git config --global user.name"Bariogs"

C:\Users\user>git config  --global user.email "bariogajohnmark@gmail.com"

C:\Users\user>cd %userprofile%\Documents

C:\Users\user\Documents>git clone https://github.com/Bariogs/jmab.git
Cloning into 'jmab'...
warning: You appear to have cloned an empty repository.

C:\Users\user\Documents>git clone https://github.com/Bariogs/jmab.git
fatal: destination path 'jmab' already exists and is not an empty directory.

C:\Users\user\Documents>dir
 Volume in drive C has no label.
 Volume Serial Number is B0FB-CD5A

 Directory of C:\Users\user\Documents

12/11/2025  11:04 AM    <DIR>          .
12/11/2025  11:04 AM    <DIR>          ..
12/11/2025  11:04 AM    <DIR>          jmab
               0 File(s)              0 bytes
               3 Dir(s)  22,438,629,376 bytes free

C:\Users\user\Documents>cd jmab

C:\Users\user\Documents\jmab>code .

C:\Users\user\Documents\jmab>



1. git --version
2. git config --global user.name"Bariogs"
3. git config  --global user.email "bariogajohnmark@gmail.com"
4. cd %userprofile%\Documents
5. git clone https://github.com/Bariogs/jmab.git
Cloning into jmab
6. git clone https://github.com/Bariogs/jmab.git
7. dir

put the name of ur repository name

8. cd jmab
9. code .



















































go to terminal

1. git add .
2.  git commit -m "Added README.md"
3. git push origin main



PS C:\Users\user\Documents\jmab> git add
Nothing specified, nothing added.
hint: Maybe you wanted to say 'git add .'?
hint: Disable this message with "git config set advice.addEmptyPathspec false"
PS C:\Users\user\Documents\jmab> git add .
PS C:\Users\user\Documents\jmab> git commit -m "Added README.md"
>>
[main (root-commit) 949b2a0] Added README.md
 1 file changed, 35 insertions(+)
PS C:\Users\user\Documents\jmab> git push origin main
info: please complete authentication in your browser...
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 680 bytes | 226.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Bariogs/jmab.git
 * [new branch]      main -> main
PS C:\Users\user\Documents\jmab> git push origin main
Everything up-to-date
PS C:\Users\user\Documents\jmab> 