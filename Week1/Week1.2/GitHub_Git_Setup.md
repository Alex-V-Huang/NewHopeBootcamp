# Setting Up GitHub and Git

## Creating a GitHub Account

1. Go to [GitHub](https://github.com/).
2. Fill in your username, email, and password.
3. Click the sign up button.

## Configure your GitHub Account with Git

1. Open the command line. On Windows, open Git Bash for Windows. On Mac, open Terminal.
2. In the command line, type the following commands:

Replace "your-full-name" with your GitHub account username.
```
git config --global user.name "your-full-name"
```

Replace "your-email-address" with your GitHub account email address.

```
git config --global user.email "your-email-address"
```

## Set up your project repository

1. Log in to [GitHub](https://github.com/).
2. Click on the plus icon near the top-right corner. A dropdown menu should appear.
3. Click on "New Repository".
4. Fill in the repository name (name of your project).
5. The repository should be public.
6. Check the box that says "Initialize this repository with a README".
7. Click on the "Create repository" button.


## Get your repository on your local computer

1. Open the command line. On Windows, open Git Bash for Windows. On Mac, open Terminal.
2. Navigate to a folder where you would like to put your repository. Remember to use the following commands:

List files in current directory
```
ls
```
List files up one directory
```
ls ..
```
Change directories
```
cd [my directory]
```
Change to directory up two directories
```
cd ../../
```
3. If not already, go to your project repository on GitHub.
4. Click on the green button that is labeled "Code". A dropdown menu should appear.
5. Copy the URL listed underneath "Clone with HTTPS"
6. In the command line, type the following:
```
git clone [your-github-repository-url]
```
