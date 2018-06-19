# Beneficiary Reporting Documentation
Documentation for the beneficiary reporting api

## Setup
1.  Install [RVM](https://rvm.io/) or [Homebrew](https://brew.sh/) to manage your Ruby version
    - RVM (uses Homebrew internally on OSX)
    ``` bash
    $ \curl -sSL https://get.rvm.io | bash -s stable --ruby
    $ rvm install 2.2
    $ ruby -v
    ruby 2.2.xxx
    $ which ruby
    /Users/user/.rvm/rubies/ruby-2.2.x/bin/ruby
    ```

2. Install bundler
    ``` bash
    $ gem install bundler
    ```

3. Install Jekyll and other dependencies
    ``` bash
    # from the root of the repository
    $ bundle install
    ```

4. Build and run the site locally in watch mode
    ``` bash
    # from the docs directory
    bundle exec jekyll serve --watch
    ```